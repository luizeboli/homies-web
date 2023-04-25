import { AppProviders } from "@/components/AppProviders";
import { AppStoreProvider } from "@/contexts/AppStore/Provider";
import { ChatList } from "./ChatList";
import { serverFetcher } from "@/utils/serverFetcher";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const conversations = await serverFetcher("/conversations");

  return (
    <AppStoreProvider conversations={conversations}>
      <AppProviders>
        <main className="flex h-full p-6 pb-0">
          <ChatList />
          {children}
        </main>
      </AppProviders>
    </AppStoreProvider>
  );
}
