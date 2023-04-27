"use client";

import { useParams } from "next/navigation";
import { ChatListItem } from "./ChatListItem";
import { NewConversationPopover } from "./NewConversationPopover";
import { useAppStore } from "@/store/app";

export function ChatList() {
  const conversations = useAppStore((state) => state.conversations);
  const params = useParams();

  return (
    <div className="mr-6 flex w-full max-w-sm flex-col">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl">Conversations</h1>

        <NewConversationPopover />
      </div>

      <ul className="space-y-3 overflow-y-auto pr-2 custom-scroll [overflow-anchor:auto]">
        {conversations.map((conversation) => (
          <ChatListItem
            key={conversation.id}
            conversation={conversation}
            isActive={params.conversationId === conversation.id}
          />
        ))}
      </ul>
    </div>
  );
}
