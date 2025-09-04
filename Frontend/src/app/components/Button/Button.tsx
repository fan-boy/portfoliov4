'use client';
import { useChat } from '../../context/ChatContext';
import { motion } from 'framer-motion';

export default function Button() {
  const { chatOpen, setChatOpen } = useChat();

  return (
    <motion.button
      type="button"
      onClick={() => setChatOpen(true)}
      aria-busy={chatOpen}
      className={`bg-black text-white px-5 py-2.5 rounded-lg font-medium shadow-sm focus:outline-none transition select-none hover:bg-gray-900 ring-2 ring-offset-2 ring-black z-50`}
      style={{ opacity: chatOpen ? 0.95 : 1 }}
      whileTap={{ scale: 0.97 }}
    >
      Chat AI
    </motion.button>
  );
}
