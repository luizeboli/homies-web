import Image from "next/image";
import { ChatMessageInput } from "./ChatMessageInput";

export function ChatTimeline() {
  return (
    <div className="flex w-full flex-col p-6 pb-4 text-zinc-300">
      <div className="mb-10 flex items-center gap-4">
        <Image
          src="https://placehold.co/40.png"
          alt="Avatar"
          width={40}
          height={40}
          className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
        />
        <h2 className="text-sm">
          Conversation with <b>O Atendente</b>
        </h2>
      </div>

      <ChatMessageInput />
    </div>
  );
}
