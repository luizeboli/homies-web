import { Conversation } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ChatListItemProps = {
  conversation: Conversation;
};

export function ChatListItem({ conversation }: ChatListItemProps) {
  const { users, id } = conversation;

  return (
    <Link
      href={`/conversation/${id}`}
      className="flex items-center gap-3 rounded-xl bg-neutral-800 p-5 hover:bg-white/10 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
      role="listitem"
    >
      <Image
        src="https://placehold.co/40.png"
        alt="Avatar"
        width={40}
        height={40}
        className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
      />
      <div className="min-w-0">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
          {users.map((user) => user.username).join(", ")}
        </p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-zinc-400">
          Olá senhor, você poderia me passar seu contato?
        </p>
      </div>
    </Link>
  );
}