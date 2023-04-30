import { Message } from "@/types";
import Image from "next/image";
import { ChatMessageListItem } from "./ChatMessageListItem";
import { useAuth } from "@clerk/nextjs";

type ChatMessagesListProps = {
  messages: Message[];
};

export function ChatMessagesList({ messages }: ChatMessagesListProps) {
  const { userId } = useAuth();
  if (!messages.length) {
    return (
      <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center gap-6 px-10 text-center">
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
    );
  }

  return (
    <div className="mt-auto overflow-hidden">
      <ul className="flex h-full flex-col-reverse items-start gap-7 overflow-y-auto p-6 custom-scroll">
        {messages.map((message) => (
          <ChatMessageListItem
            key={message.id}
            message={message}
            isSelfMessage={message.authorId === userId}
          />
        ))}
      </ul>
    </div>
  );
}
