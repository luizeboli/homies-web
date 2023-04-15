import Link from "next/link";
import SignOut from "./SignOut";
import { auth } from "@clerk/nextjs/app-beta";

export default async function Home() {
  const { sessionId } = await auth();

  return (
    <main className="flex flex-col">
      {sessionId}
      <Link href="/login">Signin</Link>
      <SignOut />
    </main>
  );
}
