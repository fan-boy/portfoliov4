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

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatEndRef.current && (chat.length > 0 || loading)) {
      const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end',
          inline: 'nearest'
        });
      };
      
      // Small delay to ensure DOM is updated
      setTimeout(scrollToBottom, 100);
    }
  }, [chat, loading]);

  // Hide prompts if user types or chat is non-empty
  useEffect(() => {
    if (question || chat.length > 0 || loading) setPromptsVisible(false);
  }, [question, chat.length, loading]);

  // Reset prompts when chat is closed (but keep chat history during session)
  useEffect(() => {
    if (!chatOpen && chat.length === 0) setPromptsVisible(true);
  }, [chatOpen, chat.length]);

  const doClose = () => {
    setChatOpen(false);
    setQuestion('');
    setLoading(false);
    // DON'T clear chat history - it persists for the session
    // setChat([]); // Commented out to maintain session history
  };

  const handleAsk = async (msg?: string) => {
    const trimmed = (msg ?? question).trim();
    if (!trimmed) return;
    
    const newUserMessage = { role: 'user' as const, text: trimmed };
    setChat(current => [...current, newUserMessage]);
    setQuestion('');
    setPromptsVisible(false);
    setLoading(true);
    
    try {
      // Send entire conversation history for context
      const conversationHistory = [...chat, newUserMessage];
      
      const res = await fetch('/api/askaboutadi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: trimmed,
          history: conversationHistory // Send context
        }),
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
            className="fixed inset-0 z-50 bg-white/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none relative w-full h-screen">
              <AnimatedBlobs expanded={true} loading={loading} />
            </div>
            {/* CLOSE button absolute top-right */}
            <button
              className={clsx(
                "fixed top-8 right-8 flex items-center gap-2 rounded-full px-4 py-2 border border-gray-200/80 bg-white/95 backdrop-blur-sm shadow-lg text-sm font-medium text-gray-500 hover:bg-white hover:text-gray-700 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 transition-all z-[120]"
              )}
              aria-label="Close chat (Esc)"
              onClick={doClose}
              tabIndex={0}
            >
              <span className="font-semibold tracking-wide">ESC</span>
              <svg width="16" height="16" viewBox="0 0 16 16" className="opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 4.5l7 7m0-7l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>

          {/* Chat history area - WIDER and more polished */}
          <motion.div
            className="fixed left-0 right-0 bottom-0 top-0 z-[60] flex flex-col items-center w-full pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div 
              ref={chatContainerRef}
              className="flex-1 w-full max-w-4xl mx-auto flex flex-col pt-[140px] pb-[200px] px-6 pointer-events-auto"
              style={{ 
                height: '100vh',
                overflowY: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(156, 163, 175, 0.3) transparent'
              }}
            >
              <div className="flex-1"></div>
              <div className="flex flex-col gap-6">
                {chat.map((turn, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={clsx(
                      'flex w-full',
                      turn.role === 'ai'
                        ? 'justify-start'
                        : 'justify-end'
                    )}
                  >
                    <div className={
                      clsx(
                        "relative px-6 py-4 rounded-[24px] max-w-[75%] text-base leading-relaxed shadow-sm border backdrop-blur-sm",
                        turn.role === 'user'
                          ? "bg-indigo-500/90 text-white rounded-br-lg mr-4 border-indigo-400/50 shadow-indigo-100"
                          : "bg-white/95 text-gray-800 rounded-bl-lg border-gray-200/80 ml-4 shadow-gray-100"
                      )
                    }>
                      <div className="whitespace-pre-wrap break-words">
                        {turn.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="relative px-6 py-4 rounded-[24px] max-w-[75%] bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-sm ml-4 rounded-bl-lg">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-gray-500 text-sm ml-1">Thinking...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>
          </motion.div>

          {/* Prompt chips & helper - Only show when no chat history */}
          {promptsVisible && chat.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed left-0 right-0 bottom-[140px] z-[85] w-full flex flex-col items-center pointer-events-auto"
            >
              <div className="text-gray-500 text-lg font-medium mb-6 select-none">
                Start a conversation. Ask anything about Adi!
              </div>
              {promptChips.length > 0 && (
                <div className="flex flex-wrap gap-3 max-w-4xl w-full px-6 justify-center">
                  {promptChips.map((prompt, idx) => (
                    <motion.button
                      key={prompt + idx}
                      type="button"
                      onClick={() => handleAsk(prompt)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={clsx(
                        "flex items-center gap-2 border border-indigo-200/80 bg-indigo-50/80 text-indigo-700 font-medium rounded-full px-5 py-3 text-sm transition-all hover:bg-indigo-100/80 hover:border-indigo-300/80 hover:text-indigo-800 shadow-sm backdrop-blur-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      )}
                    >
                      {prompt}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Chat input row - WIDER */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 right-0 bottom-0 pb-8 z-[80] w-full pointer-events-auto flex justify-center"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.7) 85%, rgba(255,255,255,0))",
              minHeight: '120px'
            }}
            onSubmit={e => {
              e.preventDefault();
              handleAsk();
            }}
          >
            <div
              className={clsx(
                "rounded-full border border-gray-200/60 shadow-xl bg-white/95 backdrop-blur-md flex gap-3 py-3 px-4 items-center transition-all focus-within:shadow-2xl focus-within:border-indigo-200 max-w-4xl w-full mx-6"
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
                  "resize-none bg-transparent px-4 py-3 text-base flex-1 font-normal border-none outline-none",
                  "focus:ring-0 focus:outline-none placeholder-gray-400",
                  "rounded-full transition-all"
                )}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAsk();
                  }
                }}
                autoFocus
              />
              {/* Enter Key Icon */}
              <span
                className="h-10 w-10 flex items-center justify-center border border-indigo-200/80 rounded-lg bg-indigo-50/80 text-indigo-600 text-lg font-semibold select-none mr-2 backdrop-blur-sm"
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
                  "h-10 px-6 rounded-full font-bold text-base border-2 transition-all backdrop-blur-sm",
                  loading
                    ? "bg-indigo-100/80 border-indigo-200/80 text-indigo-300 cursor-wait"
                    : "bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-600 hover:border-indigo-600 focus-visible:bg-indigo-600 shadow-lg hover:shadow-xl",
                  "flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2"
                )}
                tabIndex={0}
              >
                {loading ? 'Sending...' : 'Ask'}
              </button>
            </div>
          </motion.form>
        </>
      )}
    </AnimatePresence>
  );
}
