import { Conversation } from "@/types";
import { serverFetcher } from "@/utils/serverFetcher";
import { CurrentConversationSetter } from "./CurrentConversationSetter";
import { ChatTimeline } from "./ChatTimeline";

type PageProps = {
  params: {
    conversationId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { conversationId } = params;
  const conversation = await serverFetcher<Conversation>(
    `/conversations/${conversationId}`
  );

  return (
    <CurrentConversationSetter conversation={conversation}>
      <ChatTimeline />
    </CurrentConversationSetter>
  );
}
