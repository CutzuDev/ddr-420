import React from "react";
import { HydrateClient } from "~/trpc/server";

import AnimatedText from "~/app/_components/animatedtext";
export default async function Home() {
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
