import Link from "next/link"
import { Button } from "../_components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card"
import { AnimateOnScroll } from "../_components/animate-on-scroll"
import { Heart, Stethoscope, Clock, Brain, Syringe, Dna, ChevronRight } from 'lucide-react'
import React from "react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-color1">
          <AnimateOnScroll>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white md:text-5xl lg:text-6xl/none">
                    Our Services
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-white">
                    Comprehensive healthcare solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Heart className="w-8 h-8 text-color2" />
                    <CardTitle>Cardiology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Expert care for your heart health with state-of-the-art diagnostics and treatments.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Stethoscope className="w-8 h-8 text-color2" />
                    <CardTitle>General Medicine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive healthcare for all your general medical needs and concerns.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Clock className="w-8 h-8 text-color2" />
                    <CardTitle>24/7 Emergency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Round-the-clock emergency services for immediate medical attention.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Brain className="w-8 h-8 text-color2" />
                    <CardTitle>Neurology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Specialized care for neurological disorders with advanced treatment options.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Syringe className="w-8 h-8 text-color2" />
                    <CardTitle>Immunology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Cutting-edge immunological treatments and therapies for various conditions.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <Dna className="w-8 h-8 text-color2" />
                    <CardTitle>Genetics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Advanced genetic testing and counseling for personalized healthcare.</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        <AnimateOnScroll>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-color2 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need a Specialized Service?</h2>
                  <p className="mx-auto max-w-[600px] text-black md:text-xl">
                    Contact us to learn more about our full range of medical services.
                  </p>
                </div>
                <Link
                  href="/api/auth/signin"
                  className="inline-flex text-decoration-none h-10 items-center justify-center rounded-md bg-color1 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  )
}

