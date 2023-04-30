import { useAppStore } from "@/store/app";
import { CreateMessage, Message } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

export function useCreateMessage() {
  const { conversationId } = useParams();
  const addMessage = useAppStore.use.addMessage();
  const removeMessage = useAppStore.use.removeMessage();
  const { user } = useUser();

  return useMutation({
    mutationKey: ["create-message", conversationId],
    mutationFn: (data: CreateMessage) =>
      axios.post<Message>(
        `/homies/conversations/${conversationId}/messages`,
        data
      ),
    onMutate: (data: CreateMessage) => {
      const newMessageFakeId = Date.now().toString();
      const newMessage: Message = {
        ...data,
        author: {
          id: user?.id ?? "",
          username: user?.username ?? "",
        },
        authorId: user?.id ?? "",
        conversationId,
        createdAt: new Date(),
        id: newMessageFakeId,
        isSent: false,
      };
      addMessage(newMessage);
      return { newMessageFakeId };
    },
    onSuccess: (data, variables, context) => {
      if (context?.newMessageFakeId) {
        removeMessage(context.newMessageFakeId);
      }
      addMessage({ ...data.data, isSent: true });
    },
  });
}
