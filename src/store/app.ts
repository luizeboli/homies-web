import { Conversation } from "@/types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

type AppStore = {
  conversations: Conversation[];
  addConversation: (conversation: Conversation) => void;
};

const appStore = create<AppStore>((set) => ({
  conversations: [],
  addConversation: (conversation: Conversation) =>
    set((state) => ({ conversations: [...state.conversations, conversation] })),
}));

export const useAppStore = createSelectors(appStore);
