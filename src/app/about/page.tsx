import Link from "next/link"
import { Button } from "../_components/ui/button"
import { Card, CardContent } from "../_components/ui/card"
import { AnimateOnScroll } from "../_components/animate-on-scroll"
import { Stethoscope, Users, Award, Microscope, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-color1">
          <AnimateOnScroll>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white md:text-5xl lg:text-6xl/none">
                    About Diagnose.AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
                    Dedicated to providing exceptional healthcare with compassion and expertise.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimateOnScroll className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    At Diagnose.Ai, our mission is to provide high-quality, patient-centered healthcare that improves the health and well-being of our community. We are committed to delivering compassionate care, fostering innovation, and promoting health education.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <img
                  alt="MediCare Team"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="550"
                  src="/assets/Ourteam.png"
                  width="550"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <AnimateOnScroll>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Users className="w-12 h-12 text-blue-500" />
                    <h3 className="text-xl font-bold">Expert Team</h3>
                    <p>Highly qualified and experienced medical professionals</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Microscope className="w-12 h-12 text-blue-500" />
                    <h3 className="text-xl font-bold">Advanced Technology</h3>
                    <p>State-of-the-art medical equipment and facilities</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Award className="w-12 h-12 text-blue-500" />
                    <h3 className="text-xl font-bold">Quality Care</h3>
                    <p>Committed to the highest standards of patient care</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Users className="w-12 h-12 text-blue-500" />
                    <h3 className="text-xl font-bold">Patient-Centered</h3>
                    <p>Tailored healthcare solutions for individual needs</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        <AnimateOnScroll>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h2>
                  <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                    We're always looking for talented professionals to join our mission of providing exceptional healthcare.
                  </p>
                </div>
                <a href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  View Careers
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button></a>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  )
}

