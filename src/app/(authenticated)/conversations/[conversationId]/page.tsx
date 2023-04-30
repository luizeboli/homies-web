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
    `/conversations/${conversationId}/messages?take=50`
  );

  const messagesToObject = messages.reduce(
    (acc, message) => ({ ...acc, [message.id]: { ...message, isSent: true } }),
    {}
  );

  return (
    <StateInitializer state={{ messages: messagesToObject }}>
      <ChatTimeline />
    </StateInitializer>
  );
}
