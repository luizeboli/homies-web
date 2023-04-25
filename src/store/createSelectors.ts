import { StoreApi, useStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;
const createSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () =>
      // I think this is not a react hook
      // As suggested by https://github.com/pmndrs/zustand/discussions/1637#discussioncomment-4989111
      /* eslint-disable-next-line react-hooks/rules-of-hooks */
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};

export default createSelectors;
