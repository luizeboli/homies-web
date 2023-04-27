import { Message } from "@/types";
import { serverFetcher } from "@/utils/serverFetcher";
import { ChatTimeline } from "./ChatTimeline";
import { StateInitializer } from "@/components/StateInitializer";

type PageProps = {
  params: {
    conversationId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { conversationId } = params;

  const messages = await serverFetcher<Message[]>(
    `/conversations/${conversationId}/messages?take=1`
  );

  return (
    <StateInitializer state={{ messages }}>
      <ChatTimeline />
    </StateInitializer>
  );
}
