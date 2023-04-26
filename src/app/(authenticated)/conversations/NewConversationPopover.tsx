"use client";

import { useUsers } from "@/queries/useUsers";
import { User } from "@/types";
import { Combobox, Popover, Transition } from "@headlessui/react";
import { ArrowPathIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, FormEvent, useState, useMemo, useRef } from "react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useCreateConversation } from "@/mutations/useCreateConversation";
import { useAppStore } from "@/contexts/AppStore/Provider";

export function NewConversationPopover() {
  const addConversation = useAppStore((state) => state.addConversation);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [previousSelectedUsers, setPreviousSelectedUsers] = useState<User[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedInputValue = useDebouncedValue(inputValue, 300);

  const { data: users } = useUsers({ username: debouncedInputValue });
  const { mutate, isLoading } = useCreateConversation({
    onSuccess: (data) => {
      addConversation(data.data);
      setSelectedUsers([]);
      setPreviousSelectedUsers([]);
      setInputValue("");
    },
  });

  const unselectedUsers = useMemo(
    () =>
      users?.filter(
        (user) =>
          !selectedUsers.find((selectedUser) => selectedUser.id === user.id)
      ),
    [users, selectedUsers]
  );

  const handleCreateConversation = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!selectedUsers.length) {
      inputRef.current?.focus();
      return;
    }
    mutate({ usernames: selectedUsers.map((user) => user.username) });
    close();
  };

  const handleRemoveUser = (user: User) => {
    setSelectedUsers((previous) =>
      previous.filter((selectedUser) => selectedUser.id !== user.id)
    );
  };

  if (previousSelectedUsers !== selectedUsers) {
    setPreviousSelectedUsers(selectedUsers);
    setInputValue("");
  }

  return (
    <Popover className="relative">
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
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
          <div className="mb-4">
            <p>New Conversation</p>
            <p className="text-xs text-zinc-400">
              Ready to slide into a new chat? Let&apos;s do it!
            </p>
          </div>

          <form onSubmit={handleCreateConversation}>
            <div className="flex flex-wrap gap-1">
              {selectedUsers.map((user) => (
                <div
                  key={user.id}
                  className="mb-2 flex items-center gap-1 rounded-full border border-neutral-700 px-3 py-1 pr-2"
                >
                  <span className="text-xs text-white">{user.username}</span>
                  <button
                    className="w-4 rounded-full text-red-500 focus:ring-2 focus:ring-purple-500"
                    onClick={() => handleRemoveUser(user)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
              ))}
            </div>

            <Combobox
              value={selectedUsers}
              onChange={(newValues) => {
                setSelectedUsers(newValues);
              }}
              multiple
            >
              <div className="relative">
                <Combobox.Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full rounded-md border-neutral-700 bg-neutral-800 text-sm placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  placeholder="Type a username..."
                />
                {!!users?.length && (
                  <Combobox.Options className="absolute mt-2 w-full overflow-hidden rounded-md bg-neutral-800 shadow-md">
                    {unselectedUsers?.map((user) => (
                      <Combobox.Option
                        key={user.id}
                        value={user}
                        className="cursor-pointer hover:bg-neutral-700"
                      >
                        <div className={"flex p-2"}>
                          <span className={"text-sm"}>{user.username}</span>
                        </div>
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>

            <button
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-purple-500 px-5 py-2.5 text-center text-sm font-medium focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-wait disabled:opacity-60"
              disabled={isLoading}
            >
              Create
              {isLoading && <ArrowPathIcon className="ml-3 w-4 animate-spin" />}
            </button>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
