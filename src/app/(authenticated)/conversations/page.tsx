import { auth } from "@clerk/nextjs/app-beta";
import { ChatList } from "./ChatList";
import { ChatTimeline } from "./ChatTimeline";

export default async function Page() {
  const conversations = await getConversations();

  return (
    <main className="flex h-full">
      <ChatList conversations={conversations} />

      <ChatTimeline />
    </main>
  );
}

async function getConversations() {
  const { getToken } = auth();
  const token = await getToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/conversations`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  const conversations = await response.json();
  return conversations;
}
