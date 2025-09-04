'use client';
import { createContext, useContext, useState } from "react";

const ChatContext = createContext<{
  chatOpen: boolean;
  setChatOpen: (val: boolean) => void;
}>({ chatOpen: false, setChatOpen: () => {} });

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <ChatContext.Provider value={{ chatOpen, setChatOpen }}>
      {children}
    </ChatContext.Provider>
  );
}
