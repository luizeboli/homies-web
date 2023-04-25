"use client";

import { ChatListItem } from "./ChatListItem";
import { NewConversationPopover } from "./NewConversationPopover";
import { useAppStore } from "@/contexts/AppStore/Provider";

export function ChatList() {
  const conversations = useAppStore((state) => state.conversations);

  return (
    <div className="flex w-full max-w-sm flex-col p-6 pb-0">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl">Conversations</h1>

        <NewConversationPopover />
      </div>

      <ul className="space-y-3 overflow-y-auto p-2 custom-scroll">
        {conversations.map((conversation) => (
          <ChatListItem key={conversation.id} conversation={conversation} />
        ))}
      </ul>
    </div>
  );
}
