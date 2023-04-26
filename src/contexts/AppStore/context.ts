import { AppState, AppStore } from "@/store/app";
import { createContext } from "react";

type AppContext = {
  use: {
    [K in keyof AppState]: () => AppState[K];
  };
} & AppStore;

export const AppStoreContext = createContext<AppContext | null>(null);
