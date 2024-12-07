import React from "react";
import { HydrateClient } from "~/trpc/server";

import AnimatedText from "~/app/_components/animatedtext";
export default async function Home() {
  return (
    <HydrateClient>
      <AnimatedText />
    </HydrateClient>
  );
}
