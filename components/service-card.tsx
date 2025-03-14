"use client"

import { Heart, Shield, TrendingUp, Umbrella, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Shield" | "Heart" | "Umbrella" | "TrendingUp" | "GraduationCap"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Shield":
        return <Shield className="w-10 h-10 text-purple-600" />
      case "Heart":
        return <Heart className="w-10 h-10 text-purple-600" />
      case "Umbrella":
        return <Umbrella className="w-10 h-10 text-purple-600" />
      case "TrendingUp":
        return <TrendingUp className="w-10 h-10 text-purple-600" />
      case "GraduationCap":
        return <GraduationCap className="w-10 h-10 text-purple-600" />
      default:
        return <Shield className="w-10 h-10 text-purple-600" />
    }
  }

  return (
    <motion.div whileHover={{ y: -10, scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border-none shadow-md h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100">
              <IconComponent />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                {title}
              </h3>
              <p className="text-gray-500">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

