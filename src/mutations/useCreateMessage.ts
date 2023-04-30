import { CreateMessage, Message } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useParams } from "next/navigation";

type UseCreateMessageProps = {
  onSuccess: (data: AxiosResponse<Message>) => void;
};

export function useCreateMessage({ onSuccess }: UseCreateMessageProps) {
  const { conversationId } = useParams();

  return useMutation({
    mutationKey: ["create-message", conversationId],
    mutationFn: (data: CreateMessage) =>
      axios.post<Message>(
        `/homies/conversations/${conversationId}/messages`,
        data
      ),
    onSuccess,
  });
}
