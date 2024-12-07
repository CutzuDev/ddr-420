"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "~/server/auth";
import { useSession } from "next-auth/react";
import { buttonVariants } from "~/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      return <></>;
    }
    return (
      <Link
        href="/api/auth/signin"
        className={`text-decoration-none rounded-md px-3 py-2 text-sm font-medium ${
          isScrolled
            ? "text-gray-800 hover:bg-gray-200"
            : "text-white hover:bg-white/10"
        }`}
      >
        Login
      </Link>
    );
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className={`text-decoration-none text-xl font-bold ${isScrolled ? "text-white" : "text-black"}`}
              >
                My Medical
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={cn(buttonVariants({ variant: "secondary" }), "no-underline")}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-decoration-none rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/servicii"
                  className={`text-decoration-none rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`text-decoration-none rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Contact
                </Link>
                <NavLogin session={session} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}