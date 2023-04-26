import { Conversation } from "@/types";
import { formatConversationUsers } from "@/utils/formatConversationUsers";
import { useAuth } from "@clerk/nextjs";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type ChatListItemProps = {
  conversation: Conversation;
  isActive: boolean;
};

export function ChatListItem({ conversation, isActive }: ChatListItemProps) {
  const { userId } = useAuth();
  const { users, id, owner } = conversation;

  const usersToDisplay = useMemo(
    () => formatConversationUsers({ owner, userId, users }),
    [owner, userId, users]
  );

  return (
    <Link
      href={`/conversations/${id}`}
      className={classNames(
        "relative flex items-center gap-3 rounded-xl bg-neutral-800 p-5 ring-inset hover:bg-white/10 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900",
        {
          "bg-white/20 before:absolute before:left-0 before:h-[95%] before:w-2 before:rounded-l-lg before:bg-pink-500":
            isActive,
        }
      )}
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
