import { Conversation, Message } from "@/types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

export interface AppStoreState {
  messages: Message[];
  conversations: Conversation[];
}
export interface AppStore extends AppStoreState {
  addMessage: (message: Message) => void;
  addConversation: (conversation: Conversation) => void;
  initializePieceOfState: (state: Partial<AppStoreState>) => void;
}

const store = create<AppStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [message, ...state.messages] })),
  conversations: [],
  addConversation: (conversation) =>
    set((state) => ({
      conversations: [conversation, ...state.conversations],
    })),
  initializePieceOfState: (state) => set(state),
}));

export const useAppStore = createSelectors(store);
