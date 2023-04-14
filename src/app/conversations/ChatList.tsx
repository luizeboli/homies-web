"use client";

import { ChatListItem } from "./ChatListItem";

export function ChatList() {
  return (
    <div className="flex w-full max-w-sm flex-col p-6 pb-0 text-zinc-300">
      <h1 className="mb-10 text-2xl">Conversations</h1>

      <div className="flex flex-col gap-3 overflow-y-auto py-2 custom-scroll">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
}
