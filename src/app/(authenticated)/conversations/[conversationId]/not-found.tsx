import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg text-center">
      <Image
        src="/404.svg"
        width={250}
        height={250}
        alt="Not found"
        className="mx-auto"
      />
      <h1>
        Oops, looks like the conversation you&apos;re trying to access has gone
        missing! Either it got deleted or you might not have the necessary
        permissions to access it.
      </h1>
    </div>
  );
}
