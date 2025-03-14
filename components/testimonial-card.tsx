"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  position: string
  testimonial: string
}

export default function TestimonialCard({ name, position, testimonial }: TestimonialCardProps) {
  // Get initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <motion.div whileHover={{ y: -10, scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border-none shadow-md h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
              <Avatar className="w-16 h-16 border-2 border-white relative">
                <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={name} />
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * star, duration: 0.3 }}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial}"</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

