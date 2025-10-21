"use client"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Star, 
  GitBranch, 
  Users, 
  Zap, 
  Code2, 
  Palette, 
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react"

export function ComponentStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [animatedStats, setAnimatedStats] = useState({
    downloads: 0,
    components: 0,
    users: 0,
    commits: 0
  })

  const finalStats = {
    downloads: 25400,
    components: 50,
    users: 1200,
    commits: 340
  }

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      const intervals = Object.keys(finalStats).map(key => {
        const finalValue = finalStats[key]
        const increment = finalValue / steps
        let currentValue = 0

        return setInterval(() => {
          currentValue += increment
          if (currentValue >= finalValue) {
            currentValue = finalValue
            clearInterval(intervals.find(i => i === this))
          }
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }))
        }, stepTime)
      })

      return () => intervals.forEach(clearInterval)
    }
  }, [isInView])

  const stats = [
    {
      icon: Download,
      label: "Downloads",
      value: animatedStats.downloads.toLocaleString(),
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Palette,
      label: "Components",
      value: animatedStats.components,
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      label: "Developers",
      value: animatedStats.users.toLocaleString(),
      suffix: "+",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: GitBranch,
      label: "Commits",
      value: animatedStats.commits,
      suffix: "+",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal bundle size",
      color: "text-yellow-500"
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "TypeScript support with excellent DX",
      color: "text-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that works everywhere",
      color: "text-green-500"
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Themeable components with CSS variables",
      color: "text-purple-500"
    }
  ]

  const devicePreview = [
    { icon: Monitor, label: "Desktop", active: true },
    { icon: Tablet, label: "Tablet", active: false },
    { icon: Smartphone, label: "Mobile", active: false }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Developers
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Built for Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of developers building amazing products with Elementra UI
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${stat.bgColor} border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Device Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Works on Every Device</h3>
          <div className="flex justify-center items-center gap-8 mb-8">
            {devicePreview.map((device, index) => (
              <motion.div
                key={device.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${
                  device.active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  device.active 
                    ? 'border-primary bg-primary/10' 
                    : 'border-muted-foreground/30 hover:border-foreground/50'
                }`}>
                  <device.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">{device.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-lg text-muted-foreground">
                  "Elementra UI has revolutionized our development process. The components are beautiful, 
                  performant, and incredibly easy to customize."
                </div>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    W
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">WaleedCodes</div>
                    <div className="text-sm text-muted-foreground">Creator, Elementra UI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
