import Image from "next/image";
import { ChatMessageInput } from "./ChatMessageInput";

export function ChatTimeline() {
  return (
    <div className="flex w-full flex-col p-6 pb-4">
      <div className="mb-10 flex items-center gap-4">
        <Image
          src="https://placehold.co/36.png"
          alt="Avatar"
          width={36}
          height={36}
          className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
        />
        <h2 className="text-sm text-zinc-300">
          Conversation with <b>O Atendente</b>
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
