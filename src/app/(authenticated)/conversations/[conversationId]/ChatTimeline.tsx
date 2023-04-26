"use client";
import Image from "next/image";
import { ChatMessageInput } from "./ChatMessageInput";
import { useAppStore } from "@/contexts/AppStore/Provider";
import { useMemo } from "react";
import { formatConversationUsers } from "@/utils/formatConversationUsers";
import { useAuth } from "@clerk/nextjs";

export function ChatTimeline() {
  const { userId } = useAuth();
  const activeConversation = useAppStore((state) => state.activeConversation);

  const usersToDisplay = useMemo(() => {
    if (!activeConversation) return [];

    const { owner, users } = activeConversation;
    return formatConversationUsers({ owner, userId, users });
  }, [activeConversation]);

  return (
    <div className="flex h-full w-full flex-col pb-4">
      <div className="mb-10 flex items-center gap-4">
        <Image
          src="https://placehold.co/36.png"
          alt="Avatar"
          width={36}
          height={36}
          className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
        />
        <h2 className="text-sm text-zinc-300">
          Conversation with{" "}
          <b>{usersToDisplay?.map((user) => user.username).join(", ")}</b>
        </h2>
      </div>

      <div className="flex grow flex-col rounded-xl bg-neutral-800">
        <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center gap-6 px-10">
          <Image
            src="/begin_chat.svg"
            width={250}
            height={250}
            alt="Illustration of a woman starting a chat conversation"
          />
          <p className="text-sm text-zinc-300">
            Looks like it&apos;s empty! Start with a &quot;hello&quot; or jump
            into any topic you want. No limits, just let your imagination run
            wild! Add some fun with emojis. Happy chatting!
          </p>
        </div>

        <ChatMessageInput />
      </div>
    </div>
  );
}
