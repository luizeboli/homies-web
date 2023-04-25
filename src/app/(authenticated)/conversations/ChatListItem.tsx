import { Conversation } from "@/types";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type ChatListItemProps = {
  conversation: Conversation;
};

export function ChatListItem({ conversation }: ChatListItemProps) {
  const { userId } = useAuth();
  const { users, id, owner } = conversation;

  const usersToDisplay = useMemo(() => {
    const imTheOwner = owner.id === userId;
    if (imTheOwner) {
      return users;
    }

    const usersWithoutMe = users.filter((user) => user.id !== userId);
    return [owner, ...usersWithoutMe];
  }, [users, userId]);

  return (
    <Link
      href={`/conversations/${id}`}
      className="flex items-center gap-3 rounded-xl bg-neutral-800 p-5 ring-inset hover:bg-white/10 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
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
          {usersToDisplay.map((user) => user.username).join(", ")}
        </p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-zinc-400">
          Olá senhor, você poderia me passar seu contato?
        </p>
      </div>
    </Link>
  );
}
