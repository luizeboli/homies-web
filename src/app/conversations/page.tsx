import { ChatList } from "./ChatList";
import { ChatTimeline } from "./ChatTimeline";

export default function Page() {
  return (
    <main className="flex h-full">
      <ChatList />

      <ChatTimeline />
    </main>
  );
}
