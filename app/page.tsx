"use client";

import { Show, UserButton } from "@clerk/nextjs";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-gray-50">
      <div className="flex flex-col w-full h-full" style={{ maxWidth: "680px" }}>

        {/* Header */}
        <header className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100 shrink-0">
          <h1 className="text-base font-semibold text-gray-900">DocuBot</h1>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </header>

        {/* Chat */}
        <div className="flex flex-col flex-1 min-h-0">
          <ChatPanel />
        </div>

      </div>
    </div>
  );
}
