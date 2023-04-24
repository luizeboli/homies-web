"use client";

import { ChatListItem } from "./ChatListItem";
import { Conversation } from "@/types";
import { useAppStore } from "@/store/app";
import { NewConversationPopover } from "./NewConversationPopover";

type ChatListProps = {
  conversations: Conversation[];
};

export function ChatList({
  conversations: initialConversations,
}: ChatListProps) {
  const storeConversations = useAppStore.use.conversations();
  const conversations = [...storeConversations, ...initialConversations];

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
