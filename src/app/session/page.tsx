"use client";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { authConfig } from "~/server/auth/config";

export default async function Session() {
  //   const session = await getServerSession(authConfig);
  // const session = useSession();
  // console.log(session);
  return <div></div>;
}
