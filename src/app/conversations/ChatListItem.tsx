import Image from "next/image";
import Link from "next/link";

export function ChatListItem() {
  return (
    <Link
      href="/conversation/123"
      className="flex items-center gap-3 rounded-xl bg-neutral-800 p-5"
    >
      <Image
        src="https://placehold.co/48.png"
        alt="Avatar"
        width={48}
        height={48}
        className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
      />
      <div className="min-w-0">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
          O Atendente
        </p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          Olá senhor, você poderia me passar seu contato?
        </p>
      </div>
    </Link>
  );
}
