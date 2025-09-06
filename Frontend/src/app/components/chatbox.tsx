'use client';

import { useChat } from '../context/ChatContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import AnimatedBlobs from './AnimatedBlobs';

type ChatTurn = { role: 'user' | 'ai'; text: string };

const PAGE_PROMPTS: Record<string, string[]> = {
  "/": [
    "Tell me more about Adi.",
    "What joke would Adi tell?"
  ],
  // Add more routes and their prompts if needed
};

export default function ChatBox() {
  const { chatOpen, setChatOpen } = useChat();
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState<ChatTurn[]>([]);
  const [loading, setLoading] = useState(false);
  const [promptsVisible, setPromptsVisible] = useState(true);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Close on Esc key
  useEffect(() => {
    if (!chatOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') doClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [chatOpen]);

  // Scroll to bottom on new chat
  useEffect(() => {
    if (chatEndRef.current && chatContainerRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [chat, loading]);

  // Hide prompts if user types or chat is non-empty
  useEffect(() => {
    if (question || chat.length > 0 || loading) setPromptsVisible(false);
  }, [question, chat.length, loading]);

  // Show prompts anew if chat is cleared or closed
  useEffect(() => {
    if (!chatOpen) setPromptsVisible(true);
  }, [chatOpen]);

  const doClose = () => {
    setChatOpen(false);
    setQuestion('');
    setLoading(false);
    setPromptsVisible(true);
    setChat([]); // optionally clear chat history on close
  };

  const handleAsk = async (msg?: string) => {
    const trimmed = (msg ?? question).trim();
    if (!trimmed) return;
    setChat([...chat, { role: 'user', text: trimmed }]);
    setQuestion('');
    setPromptsVisible(false);
    setLoading(true);
    try {
      const res = await fetch('/api/askaboutadi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      setChat(current => [...current, { role: 'ai', text: data.response || 'No response received.' }]);
    } catch (err) {
      console.error(err);
      setChat(current => [...current, { role: 'ai', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Get relevant prompts for route
  const promptChips = PAGE_PROMPTS[pathname || "/"] || [];

  return (
    <AnimatePresence>
      {chatOpen && (
        <>
          {/* Overlay & Blobs */}
          <motion.div
            className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="pointer-events-none relative w-full h-screen">
              <AnimatedBlobs expanded={true} loading={loading} />
            </div>
            {/* CLOSE button absolute top-right */}
            <button
              className={clsx(
                "fixed top-6 right-8 flex items-center gap-1 rounded-full px-3 py-1 border border-gray-200 bg-white/90 shadow text-xs font-medium text-gray-400 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 transition z-[120]"
              )}
              aria-label="Close chat (Esc)"
              onClick={doClose}
              tabIndex={0}
            >
              <span className="font-semibold tracking-wide">ESC</span>
              <svg width="16" height="16" viewBox="0 0 16 16" className="ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 4.5l7 7m0-7l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>

          {/* Chat history area with PROPER SCROLLING */}
          <motion.div
            className="fixed left-0 right-0 bottom-0 top-0 z-[60] flex flex-col items-center w-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div 
              ref={chatContainerRef}
              className="flex-1 w-full max-w-xl mx-auto flex flex-col pt-[120px] pb-[180px] px-4 pointer-events-auto"
              style={{ 
                height: '100vh',
                overflowY: 'auto',
                scrollBehavior: 'smooth'
              }}
            >
              <div className="flex-1"></div>
              <div className="flex flex-col gap-4">
                {chat.map((turn, i) => (
                  <div
                    key={i}
                    className={clsx(
                      'flex w-full',
                      turn.role === 'ai'
                        ? 'justify-start'
                        : 'justify-end'
                    )}
                  >
                    <div className={
                      clsx(
                        "relative px-4 py-3 rounded-[20px] max-w-[85%] text-base whitespace-pre-wrap shadow-sm leading-relaxed",
                        turn.role === 'user'
                          ? "bg-indigo-50/70 text-indigo-800 rounded-br-md mr-2"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-200 ml-2"
                      )
                    }>
                      {turn.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="relative px-4 py-3 rounded-[20px] max-w-[85%] bg-white text-gray-400 border border-gray-200 shadow-sm ml-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>
          </motion.div>

          {/* Prompt chips & helper */}
          {promptsVisible && (
            <div className="fixed left-0 right-0 bottom-[120px] z-[85] w-full flex flex-col items-center pointer-events-auto">
              <div className="text-gray-400 text-base font-medium mb-4 select-none">
                Start a conversation. Ask anything about Adi!
              </div>
              {promptChips.length > 0 && (
                <div className="flex flex-wrap gap-3 max-w-xl w-full px-4 justify-center">
                  {promptChips.map((prompt, idx) => (
                    <button
                      type="button"
                      key={prompt + idx}
                      onClick={() => handleAsk(prompt)}
                      className={clsx(
                        "flex items-center gap-1 border border-indigo-200 bg-indigo-50 text-indigo-700 font-medium rounded-full px-4 py-2 text-sm transition hover:bg-indigo-100 hover:border-indigo-300 hover:text-indigo-800 shadow-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      )}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat input row */}
          <motion.form
            className={clsx(
              "fixed left-0 right-0 bottom-0 pb-6 z-[80] w-full pointer-events-auto flex justify-center"
            )}
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0.3) 90%, rgba(255,255,255,0))",
              minHeight: '100px'
            }}
            onSubmit={e => {
              e.preventDefault();
              handleAsk();
            }}
          >
            <div
              className={clsx(
                "rounded-full border border-gray-200 shadow-lg bg-white/95 flex gap-2 py-2.5 px-3 items-center transition-all focus-within:shadow-xl max-w-xl w-full backdrop-blur-sm"
              )}
            >
              <textarea
                ref={inputRef}
                value={question}
                disabled={loading}
                rows={1}
                placeholder="Ask me anything about Adi..."
                onChange={e => setQuestion(e.target.value)}
                className={clsx(
                  "resize-none bg-transparent px-3 py-2 text-base flex-1 font-normal border-none outline-none",
                  "focus:ring-0 focus:outline-none placeholder-gray-400",
                  "rounded-full transition-shadow"
                )}
                onKeyDown={e =>
                  e.key === 'Enter' && !e.shiftKey
                    ? (e.preventDefault(), handleAsk())
                    : undefined
                }
                autoFocus
              />
              {/* Enter Key Icon (visually aligned) */}
              <span
                className="h-9 w-9 flex items-center justify-center border border-indigo-200 rounded-[6px] bg-white text-indigo-600 text-lg font-semibold select-none mr-1"
                aria-label="Enter key"
                tabIndex={-1}
                style={{ pointerEvents: 'none' }}
              >
                {'\u23CE'}
              </span>
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className={clsx(
                  "h-9 px-5 rounded-full font-bold text-lg border-2 transition",
                  loading
                    ? "bg-indigo-100 border-indigo-200 text-indigo-300 cursor-wait"
                    : "bg-white border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 focus-visible:bg-indigo-100",
                  "flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                )}
                tabIndex={0}
              >
                Ask
              </button>
            </div>
          </motion.form>
        </>
      )}
    </AnimatePresence>
  );
}
