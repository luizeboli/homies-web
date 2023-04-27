import { AppProviders } from "@/components/AppProviders";
import { ChatList } from "./ChatList";
import { serverFetcher } from "@/utils/serverFetcher";
import { Conversation } from "@/types";
import { StateInitializer } from "@/components/StateInitializer";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const conversations = await serverFetcher<Conversation[]>("/conversations");

  return (
    <StateInitializer state={{ conversations }}>
      <AppProviders>
        <main className="flex h-full p-6 pb-0">
          <ChatList />
          {children}
        </main>
      </AppProviders>
    </StateInitializer>
  );
}
