"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button, buttonVariants } from "~/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { Stethoscope } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const buttons: { text: string; url: string }[] = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];

  const { data: session } = useSession();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function NavLogin({ session }: any) {
    if (session) {
      return (
        <Button
          onClick={() => {
            signOut();
          }}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "no-underline",
          )}
        >
          Sign out
        </Button>
      );
    }
    return (
      <Link
        href="/api/auth/signin"
        className={cn(buttonVariants({ variant: "secondary" }), "no-underline")}
      >
        Login
      </Link>
    );
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full max-w-[1200px] justify-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-decoration-none text-xl font-bold transition-all`}
            >
              Diagnose. <span className="-ml-1 text-base">AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4">
              {buttons.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.url}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "no-underline",
                    )}
                  >
                    {e.text}
                  </Link>
                );
              })}
              <NavLogin session={session} />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}
