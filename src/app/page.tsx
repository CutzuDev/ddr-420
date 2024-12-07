import Link from "next/link";
import Navbar from "./_components/nabvar";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();

  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    <>
      <HydrateClient>
          <div className="h-screen bg-gradient-to-r from-violet-600 to-indigo-600">

          </div>
      </HydrateClient>
    </>
  );
}
