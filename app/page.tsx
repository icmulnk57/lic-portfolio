"use client"

import { useEffect, useState } from "react"
import { Mail, MapPin, Phone, ChevronDown, Shield, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import AnimatedCounter from "@/components/animated-counter"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-white font-bold"
              >
                A
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
            >
              Anoj Kumar Mandal
            </motion.span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            {["About", "Services", "Testimonials", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-purple-600 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Get a Quote
            </Button>
          </motion.div>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <AnimatedBackground />
          <div className="container px-4 mx-auto md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    Secure Your Future with LIC Insurance
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Personalized insurance solutions to protect what matters most to you and your family.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Get a Quote
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <Image
                    src="/img3.png"
                    alt="Anoj Kumar Mandal"
                    width={320}
                    height={320}
                    className="object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="container px-4 mx-auto md:px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                <Shield className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">
                  <AnimatedCounter from={0} to={500} duration={2} />+
                </h3>
                <p className="text-white/80">Clients Protected</p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">
                  <AnimatedCounter from={0} to={10} duration={2} />+
                </h3>
                <p className="text-white/80">Years Experience</p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                <Award className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">
                  <AnimatedCounter from={0} to={15} duration={2} />+
                </h3>
                <p className="text-white/80">Awards Won</p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                <TrendingUp className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">
                  ₹<AnimatedCounter from={0} to={50} duration={2} />
                  Cr+
                </h3>
                <p className="text-white/80">Claims Settled</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-xl opacity-20 animate-pulse"></div>
                  <Image
                    src="/img2.png"
                    alt="About Anoj Kumar Mandal"
                    width={400}
                    height={400}
                    className="object-cover rounded-lg shadow-lg relative z-10"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    About Me
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 10 years of experience as a LIC agent, I have helped hundreds of families secure their
                    financial future.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    I specialize in providing personalized insurance solutions that meet the unique needs of each
                    client. My goal is to ensure that you and your loved ones are protected against life's
                    uncertainties.
                  </p>
                  <p className="text-gray-500">
                    As your dedicated LIC agent, I will guide you through the entire process, from selecting the right
                    policy to filing claims. I believe in building long-term relationships based on trust and
                    transparency.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  Insurance Services
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive insurance solutions for every stage of life
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  title: "Life Insurance",
                  description: "Protect your family's financial future with our comprehensive life insurance policies.",
                  icon: "Shield",
                },
                {
                  title: "Health Insurance",
                  description:
                    "Get the best medical care without worrying about the expenses with our health insurance plans.",
                  icon: "Heart",
                },
                {
                  title: "Retirement Plans",
                  description: "Secure your golden years with our retirement plans that ensure financial independence.",
                  icon: "Umbrella",
                },
                {
                  title: "Child Plans",
                  description: "Invest in your child's future education and other important milestones.",
                  icon: "GraduationCap",
                },
                {
                  title: "Investment Plans",
                  description: "Grow your wealth with our investment plans that offer attractive returns.",
                  icon: "TrendingUp",
                },
                {
                  title: "Term Insurance",
                  description: "High coverage at affordable premiums to ensure your family's financial security.",
                  icon: "Shield",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <ServiceCard title={service.title} description={service.description} icon={service.icon as any} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  Client Testimonials
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What my clients say about my services
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  name: "Rajesh Sharma",
                  position: "Business Owner",
                  testimonial:
                    "Anoj helped me choose the perfect insurance plan for my family. His knowledge and guidance were invaluable.",
                },
                {
                  name: "Priya Patel",
                  position: "IT Professional",
                  testimonial:
                    "I've been working with Anoj for over 5 years now. He is always available to answer my questions and provide the best advice.",
                },
                {
                  name: "Sunil Verma",
                  position: "Doctor",
                  testimonial:
                    "Thanks to Anoj, I have a solid retirement plan in place. His expertise in financial planning is exceptional.",
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <TestimonialCard
                    name={testimonial.name}
                    position={testimonial.position}
                    testimonial={testimonial.testimonial}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Get in Touch</h2>
                  <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions about insurance? Contact me for a free consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <Card className="overflow-hidden border-none shadow-xl">
                    <CardContent className="p-6">
                      <div className="grid gap-4">
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="p-2 rounded-full bg-purple-100">
                            <Phone className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-gray-500">9867993457</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="p-2 rounded-full bg-purple-100">
                            <Mail className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-gray-500">mandalamankumar.57@gmail.com</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="p-2 rounded-full bg-purple-100">
                            <MapPin className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Address</p>
                            <p className="text-sm text-gray-500">Motilal Nehru Nagar, Worli, Mumbai 400018</p>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="w-full border-none shadow-xl">
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First name
                          </label>
                          <input
                            id="first-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last name
                          </label>
                          <input
                            id="last-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="Enter your message"
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                  AKM
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Anoj Kumar Mandal
              </span>
            </motion.div>
            <p className="text-sm text-gray-500">© 2025 Anoj Kumar Mandal. LIC Agent. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["facebook", "twitter", "instagram"].map((social, i) => (
                <motion.div
                  key={social}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    {social === "facebook" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                    {social === "twitter" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                    <span className="sr-only">{social}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

