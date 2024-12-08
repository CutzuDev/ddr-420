import React from "react";
import { HydrateClient } from "~/trpc/server";
import { AnimateOnScroll } from "~/app/_components/animate-on-scroll";
import AnimatedText from "~/app/_components/animatedtext";
import { Card, CardContent, CardHeader, CardTitle } from "~/app/_components/ui/card";
import { Clock, Heart, Star, Stethoscope, Users } from "lucide-react";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="min-h-screen">
      <HydrateClient>
        <AnimatedText />
        <AnimateOnScroll>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Heart className="w-8 h-8 text-color1" />
                    <CardTitle>Cardiology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Expert care for your heart health with state-of-the-art diagnostics and treatments.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Stethoscope className="w-8 h-8 text-blue-500" />
                    <CardTitle>General Medicine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive healthcare for all your general medical needs and concerns.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="w-8 h-8 text-blue-500" />
                    <CardTitle>24/7 Emergency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Round-the-clock emergency services for immediate medical attention.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Patients Say</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center">
                        <Users className="w-8 h-8 text-blue-500" />
                        <CardTitle className="ml-2">Patient {i}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <p>Exceptional care and professionalism. I couldn't be happier with the treatment I received.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-color1 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Prioritize Your Health?</h2>
                  <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                    Enroll today and take the first step towards a healthier you.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex text-decoration-none h-10 items-center justify-center rounded-md bg-color2 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </HydrateClient>
    </div>
  );
}
