import { Conversation, CreateConversation } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

type UseCreateConversationProps = {
  onSuccess: (data: AxiosResponse<Conversation>) => void;
};

export function useCreateConversation({
  onSuccess,
}: UseCreateConversationProps) {
  return useMutation({
    mutationKey: ["create-conversation"],
    mutationFn: (data: CreateConversation) =>
      axios.post<Conversation>("/homies/conversations", data),
    onSuccess,
  });
}
