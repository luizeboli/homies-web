"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { ChatListItem } from "./ChatListItem";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Conversation } from "@/types";
import { useAppStore } from "@/store/app";

type ChatListProps = {
  conversations: Conversation[];
};

export function ChatList({
  conversations: initialConversations,
}: ChatListProps) {
  const storeConversations = useAppStore.use.conversations();
  const conversations = [...storeConversations, ...initialConversations];

  return (
    <div className="flex w-full max-w-sm flex-col p-6 pb-0">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl">Conversations</h1>

        <Popover className="relative">
          <Popover.Button className="justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-700 p-1 hover:bg-gradient-to-l focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            <PlusIcon className="w-4 fill-white" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-2"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute w-screen max-w-sm rounded-md border border-neutral-700 bg-neutral-800 p-4 drop-shadow-lg">
              <div className="">
                <p>New Conversation</p>
                <p className="text-xs text-zinc-400">
                  Ready to slide into a new chat? Let&apos;s do it!
                </p>
              </div>

              <input
                type="text"
                placeholder="Type a username..."
                className="mt-4 w-full rounded-md border-neutral-700 bg-neutral-800 text-sm placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              />
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>

      <ul className="space-y-3 overflow-y-auto p-2 custom-scroll">
        {conversations.map((conversation) => (
          <ChatListItem key={conversation.id} conversation={conversation} />
        ))}
      </ul>
    </div>
  );
}
