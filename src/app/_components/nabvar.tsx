"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-red-400"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Contact
                </Link>
                <Link href="/api/auth/signin"
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        isScrolled
                          ? "text-gray-800 hover:bg-gray-200"
                          : "text-white hover:bg-white/10"
                      }`} >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}
