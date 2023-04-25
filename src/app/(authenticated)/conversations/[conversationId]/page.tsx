import { Conversation } from "@/types";
import { serverFetcher } from "@/utils/serverFetcher";

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

  return <h1>Conversation {conversation.id}</h1>;
}
