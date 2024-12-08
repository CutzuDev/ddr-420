import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card"
import { AnimateOnScroll } from "../_components/animate-on-scroll"
import { Stethoscope, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "~/app/_components/ui/button";
import { Input } from "~/app/_components/ui/input";
import { Textarea } from "~/app/_components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-color1">
          <AnimateOnScroll>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Contact Us
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-black">
                    We're here to help. Get in touch with us for any inquiries or support.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <Input id="email" placeholder="Your email" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message">Message</label>
                        <Textarea className="min-h-[100px]" id="message" placeholder="Your message" required />
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>info@diagnose.ai</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+4071 234 567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Bucuresti, Calea Victoriei Nr. 12</span>
                    </div>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Immediate Assistance?</h2>
                  <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                    Our emergency helpline is available 24/7 for urgent medical concerns.
                  </p>
                </div>
                <Button className="bg-color3 text-white hover:bg-blue-50 text-black">
                  Call our emergency helpline
                </Button>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  )
}

