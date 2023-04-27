import Image from "next/image";

export default async function Page() {
  return (
    <div>
      <div className="max-w-lg text-center">
        <Image
          src="/begin_chat.svg"
          width={250}
          height={250}
          alt="Illustration of a woman starting a chat conversation"
          className="mx-auto mb-5"
        />
        <h2 className="mb-2 text-xl">Welcome!</h2>
        <h3 className="text-sm">
          Homies is the perfect app to stay connected with your closest friends
          and create new memories together. So why wait? Let&apos;s chat, homie!
        </h3>
      </div>
    </div>
  );
}
