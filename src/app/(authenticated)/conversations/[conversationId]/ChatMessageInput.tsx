"use client";
import { useAppStore } from "@/contexts/AppStore/Provider";
import { formatConversationUsers } from "@/utils/formatConversationUsers";
import { useAuth } from "@clerk/nextjs";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useMemo, useRef } from "react";

export function ChatMessageInput() {
  const { userId } = useAuth();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activeConversation = useAppStore((state) => state.activeConversation);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef.current?.value);
  };

  const usersPlaceholder = useMemo(() => {
    if (!activeConversation) return "";
    const { owner, users } = activeConversation;
    return formatConversationUsers({ owner, users, userId })
      .map((user) => user.username)
      .join(", ");
  }, [activeConversation, userId]);

  return (
    <form
      className="mt-auto flex items-center gap-4 p-6"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        autoComplete="homies-conversation-input"
        type="text"
        placeholder={`Chat with ${usersPlaceholder}...`}
        className="h-12 w-full rounded-full border-neutral-600 bg-neutral-700 text-sm placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
      />
      <button className="justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 text-center text-sm font-medium hover:bg-gradient-to-l focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-wait disabled:opacity-60">
        <PaperAirplaneIcon className="w-6 -rotate-45 fill-white/80" />
      </button>
    </form>
  );
}
