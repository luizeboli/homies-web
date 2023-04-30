import { Message } from "@/types";
import { CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Image from "next/image";

type ChatMessageListItemProps = {
  message: Message;
  isSelfMessage: boolean;
};

export function ChatMessageListItem({
  message,
  isSelfMessage,
}: ChatMessageListItemProps) {
  return (
    <li className="flex items-end gap-4">
      <Image
        src="https://i.pravatar.cc/300"
        alt="Avatar"
        width={40}
        height={40}
        className="rounded-2xl shadow-md"
      />

      <div
        className={classNames(
          "relative flex flex-col rounded-xl bg-neutral-600 px-4 py-2 text-sm shadow-md before:absolute before:-bottom-2 before:-left-[22px] before:h-10 before:w-6 before:rotate-90 before:bg-arrow-gradient",
          { "bg-purple-800 before:bg-arrow-gradient-purple": isSelfMessage }
        )}
      >
        <span className="mb-0.5 text-xs text-zinc-300">
          {message.author.username}
        </span>
        <span className="mb-2">{message.content}</span>
        <div className="flex items-center justify-end">
          <span className="text-right text-xxs text-zinc-300">
            {new Date(message.createdAt).toLocaleTimeString("en-US")}
          </span>
          {isSelfMessage && (
            <span className="relative ml-2 h-3 w-3">
              {message.isSent && <CheckIcon className="absolute w-3" />}
              <CheckIcon className="absolute right-1 w-3" />
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
