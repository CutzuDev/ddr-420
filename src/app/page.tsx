import Link from "next/link";
import Navbar from "./_components/nabvar";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { useSession } from "next-auth/react";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();

  return (
    <HydrateClient>
      <main className="h-[500vh] bg-red-400"></main>
    </HydrateClient>
  );
}
