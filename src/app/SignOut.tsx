"use client";

import { useClerk } from "@clerk/nextjs";

export default function SignOut() {
  const { signOut } = useClerk();
  return <button onClick={() => signOut()}>Signout</button>;
}
