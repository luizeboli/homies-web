export type User = {
  username: string;
};

export type Conversation = {
  id: string;
  ownerUsername: string;
  users: User[];
};
