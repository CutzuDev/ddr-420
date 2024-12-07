"use client";

import { useSession } from "next-auth/react";

export default function Session() {
  const {data: session} = useSession();
  console.log(session);
  return <div></div>;
}
