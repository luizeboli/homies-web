export type User = {
  id: string;
  username: string;
};

export type Conversation = {
  id: string;
  ownerUsername: string;
  users: User[];
};
