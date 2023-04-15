import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export function ChatMessageInput() {
  return (
    <div className="flex grow flex-col rounded-xl bg-neutral-800">
      <div className="mt-auto flex items-center gap-4 p-6">
        <input
          type="text"
          placeholder="Type your message..."
          className="h-12 w-full rounded-full border-neutral-600 bg-neutral-700 text-sm text-white/90 placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
        />
        <button className="justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-wait disabled:opacity-60">
          <PaperAirplaneIcon className="w-6 -rotate-45 fill-white/80" />
        </button>
      </div>
    </div>
  );
}
