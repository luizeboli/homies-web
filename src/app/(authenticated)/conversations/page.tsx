import { AppStoreProvider } from "@/contexts/AppStore/Provider";
import { ChatList } from "./ChatList";
import { ChatTimeline } from "./ChatTimeline";
import { serverFetcher } from "@/utils/serverFetcher";
import { AppProviders } from "@/components/AppProviders";

export default async function Page() {
  const conversations = await serverFetcher("/conversations");

  return (
    <AppStoreProvider conversations={conversations}>
      <AppProviders>
        <main className="flex h-full">
          <ChatList />

          <ChatTimeline />
        </main>
      </AppProviders>
    </AppStoreProvider>
  );
}
