export type User = {
  id: string;
  username: string;
};

export type Conversation = {
  id: string;
  ownerUsername: string;
  owner: User;
  users: User[];
};

export type CreateConversation = {
  usernames: string[];
};
