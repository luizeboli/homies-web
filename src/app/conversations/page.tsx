import { ChatList } from "./ChatList";
import { ChatTimeline } from "./ChatTimeline";
import { serverFetcher } from "@/utils/serverFetcher";

export default async function Page() {
  const conversations = await serverFetcher("/conversations", {
    cache: "no-cache",
  });

  return (
    <main className="flex h-full">
      <ChatList conversations={conversations} />

      <ChatTimeline />
    </main>
  );
}
