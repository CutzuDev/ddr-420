import Link from "next/link";
import React from 'react';
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { useSession } from "next-auth/react";

import {motion} from "framer-motion";
import AnimatedText from "~/app/_components/animatedtext";
export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();

  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    <>
      <HydrateClient>
        <div className="h-screen">
          <div className="p-3.5 max-56 text-white"><AnimatedText/></div>
        </div>
      </HydrateClient>
    </>
  );
}
