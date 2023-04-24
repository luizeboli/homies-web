import { Popover, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Fragment, FormEvent } from "react";

export function NewConversationPopover() {
  const handleCreateConversation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
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

          <form onSubmit={handleCreateConversation}>
            <input
              type="text"
              placeholder="Type a username..."
              className="mt-4 w-full rounded-md border-neutral-700 bg-neutral-800 text-sm placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            />

            <button className="mt-2 flex w-full justify-center rounded-lg bg-purple-500 px-5 py-2.5 text-center text-sm font-medium focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-wait disabled:opacity-60">
              Create
            </button>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
