"use client";
import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Switch } from "./Switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./Progress"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import FancyTestimonialsSlider from "./fancy-testimonials-slider"
import ScratchToReveal from "./scratch-to-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [progressValue, setProgressValue] = useState(75)
  const [switchValue, setSwitchValue] = useState(false)
  const [activeTab, setActiveTab] = useState("components")

  const [baseColor, setBaseColor] = useState([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized

  const [dark, setDark] = useState(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]) // #e78a53
    setGlowColor([0.906, 0.541, 0.325]) // #e78a53
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  // Auto-animate progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(prev => {
        const newValue = prev >= 100 ? 0 : prev + 25
        return newValue
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setInputValue("")
    }
  }

  return (
    <section
      id="features"
      className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div
        className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div
        className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className
          )}>
          Component Showcase
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>🎨</span>
              <span>Elementra UI Components</span>
            </div>
          }>
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* Interactive Components */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Interactive Components</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Beautiful, interactive components including badges, buttons, and switches with smooth animations.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-auto flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-md space-y-8">
                    {/* Badges Section */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Interactive Badges</h4>
                      <div className="flex flex-wrap gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="default" className="cursor-pointer hover:shadow-lg transition-all">
                            Default
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="secondary" className="cursor-pointer hover:shadow-lg transition-all">
                            Secondary
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="destructive" className="cursor-pointer hover:shadow-lg transition-all">
                            Destructive
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline" className="cursor-pointer hover:shadow-lg transition-all">
                            Outline
                          </Badge>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Interactive Buttons</h4>
                      <div className="flex flex-wrap gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="shadow-lg hover:shadow-xl transition-all">
                            Primary
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="secondary" size="sm" className="shadow-lg hover:shadow-xl transition-all">
                            Secondary
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" className="shadow-lg hover:shadow-xl transition-all">
                            Outline
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="shadow-lg hover:shadow-xl transition-all">
                            Ghost
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Switch & Input Section */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Form Controls</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <Switch 
                            checked={switchValue} 
                            onCheckedChange={setSwitchValue}
                            className="cursor-pointer"
                          />
                          <span className="text-sm">
                            {switchValue ? "Enabled" : "Disabled"}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="demo-input" className="text-xs">Sample Input</Label>
                          <Input 
                            id="demo-input"
                            placeholder="Type something..." 
                            className="h-8 text-sm"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Floating particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        style={{
                          left: `${10 + i * 20}%`,
                          top: `${20 + (i % 2) * 60}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isCliHovering ? {
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -30, -60],
                        } : { opacity: 0, scale: 0, y: 0 }}
                        transition={{
                          duration: 3,
                          delay: i * 0.3,
                          repeat: isCliHovering ? Infinity : 0,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Beautiful UI Elements */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Beautiful UI Elements</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Elegant cards, progress indicators, and alert components with smooth animations and modern design.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-center justify-center select-none p-4">
                  <div className="w-full max-w-sm space-y-4">
                    {/* Tabs Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="components">Components</TabsTrigger>
                          <TabsTrigger value="layouts">Layouts</TabsTrigger>
                        </TabsList>
                        <TabsContent value="components" className="space-y-3 mt-4">
                          <Card className="w-full">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg">Component Card</CardTitle>
                              <CardDescription>
                                Interactive component demonstration.
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">
                                This shows how components work together seamlessly.
                              </p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="layouts" className="space-y-3 mt-4">
                          <Card className="w-full">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg">Layout Card</CardTitle>
                              <CardDescription>
                                Flexible layout systems and grids.
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">
                                Responsive designs that adapt to any screen size.
                              </p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </motion.div>

                    {/* Animated Progress Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span>Auto Progress</span>
                        <span>{progressValue}%</span>
                      </div>
                      <Progress 
                        value={progressValue} 
                        className="w-full transition-all duration-1000 ease-in-out" 
                      />
                    </motion.div>

                    {/* Dynamic Alert Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.div
                        key={progressValue > 50 ? "success" : "info"}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert className={progressValue > 50 ? "border-green-500/20 bg-green-500/5" : "border-blue-500/20 bg-blue-500/5"}>
                          <AlertTitle>
                            {progressValue > 50 ? "Well Done!" : "In Progress"}
                          </AlertTitle>
                          <AlertDescription>
                            {progressValue > 50 
                              ? "Your progress is looking great!" 
                              : "Keep going, you're making progress!"
                            }
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    </motion.div>

                    {/* Animated background effect with color change */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: progressValue > 50 
                          ? "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)"
                          : "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)"
                      }}
                      initial={{ opacity: 0 }}
                      animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Progress indicator particles */}
                    {[...Array(Math.floor(progressValue / 20))].map((_, i) => (
                      <motion.div
                        key={`progress-${progressValue}-${i}`}
                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${25 + (i % 2) * 50}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -20, -40]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Advanced Features */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.5)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Advanced Features</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Complex components like testimonial sliders and signature capture with advanced animations.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isFeature3Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm p-6 overflow-hidden"
                    >
                      {/* Dynamic testimonial data */}
                      {(() => {
                        const testimonials = [
                          {
                            name: "Sarah Chen",
                            role: "Lead Developer",
                            company: "TechCorp",
                            avatar: "from-purple-500 to-pink-500",
                            quote: "Elementra UI components are absolutely amazing! They've transformed our development workflow.",
                            rating: 5
                          },
                          {
                            name: "Alex Rodriguez",
                            role: "UI Designer",
                            company: "DesignStudio",
                            avatar: "from-blue-500 to-cyan-500",
                            quote: "The most beautiful and functional component library I've ever used. Highly recommended!",
                            rating: 5
                          },
                          {
                            name: "Michael Park",
                            role: "CTO",
                            company: "StartupLab",
                            avatar: "from-green-500 to-emerald-500",
                            quote: "Incredible performance and stunning designs. Our team productivity increased by 300%!",
                            rating: 5
                          }
                        ];
                        
                        const currentIndex = Math.floor(Date.now() / 3000) % testimonials.length;
                        const currentTestimonial = testimonials[currentIndex];
                        
                        return (
                          <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center gap-3">
                              <motion.div 
                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentTestimonial.avatar} flex items-center justify-center text-white font-bold text-lg`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                              </motion.div>
                              <div>
                                <motion.div 
                                  className="font-medium text-sm"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  {currentTestimonial.name}
                                </motion.div>
                                <motion.div 
                                  className="text-xs text-muted-foreground"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  {currentTestimonial.role}, {currentTestimonial.company}
                                </motion.div>
                              </div>
                            </div>
                            
                            <motion.blockquote 
                              className="text-sm text-muted-foreground italic leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              "{currentTestimonial.quote}"
                            </motion.blockquote>
                            
                            <div className="flex items-center gap-1">
                              {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <motion.svg
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400"
                                  viewBox="0 0 20 20"
                                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: 0.5 + i * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </motion.svg>
                              ))}
                            </div>

                            {/* Testimonial indicator dots */}
                            <div className="flex items-center justify-center gap-2 pt-2">
                              {testimonials.map((_, i) => (
                                <motion.div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'bg-primary' : 'bg-primary/30'
                                  }`}
                                  animate={{ 
                                    scale: i === currentIndex ? 1.2 : 1,
                                    opacity: i === currentIndex ? 1 : 0.5
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>
                        );
                      })()}

                      {/* Enhanced floating particles */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${15 + i * 12}%`,
                            top: `${20 + (i % 3) * 25}%`,
                          }}
                          initial={{ opacity: 0, y: 0 }}
                          animate={isFeature3Hovering ? {
                            opacity: [0, 1, 0],
                            y: [-20, -40, -60],
                            scale: [0, 1, 0],
                          } : { opacity: 0, y: 0, scale: 0 }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.2,
                            repeat: isFeature3Hovering ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        />
                      ))}

                      {/* Glowing border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-primary/30"
                        initial={{ opacity: 0 }}
                        animate={isFeature3Hovering ? { 
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.02, 1]
                        } : { opacity: 0, scale: 1 }}
                        transition={{
                          duration: 2,
                          repeat: isFeature3Hovering ? Infinity : 0,
                          repeatType: "loop",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Modern Animations */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 20px 40px rgba(231, 138, 83, 0.3)",
                  borderColor: "rgba(231, 138, 83, 0.6)",
                }}
                style={{ transition: "all 0s ease-in-out" }}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Modern Animations</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Interactive animations and effects like scratch-to-reveal that engage users and enhance UX.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-xs">
                    <motion.div
                      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-6 overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isFeature4Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Interactive Scratch Card */}
                      <div className="text-center space-y-4">
                        <motion.div 
                          className="text-lg font-semibold"
                          animate={{ 
                            scale: isFeature4Hovering ? [1, 1.05, 1] : 1,
                            rotate: isFeature4Hovering ? [0, 2, -2, 0] : 0
                          }}
                          transition={{ duration: 2, repeat: isFeature4Hovering ? Infinity : 0 }}
                        >
                          🎁 Interactive Demo
                        </motion.div>

                        <div className="relative group">
                          {/* Hidden reward */}
                          <motion.div 
                            className="w-32 h-20 mx-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xs relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: '-100%' }}
                              animate={isFeature4Hovering ? { x: '200%' } : { x: '-100%' }}
                              transition={{
                                duration: 1.5,
                                repeat: isFeature4Hovering ? Infinity : 0,
                                repeatDelay: 1,
                                ease: "easeInOut"
                              }}
                            />
                            <span className="text-sm font-bold">🏆 PREMIUM</span>
                            <span className="text-xs">Component</span>
                          </motion.div>

                          {/* Animated scratch overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-lg flex items-center justify-center cursor-pointer"
                            initial={{ opacity: 1 }}
                            animate={isFeature4Hovering ? { 
                              opacity: [1, 0.8, 0.6, 0.3, 0],
                              scale: [1, 0.98, 0.95, 0.9, 0.8]
                            } : { opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            whileHover={{ scale: 0.98 }}
                          >
                            <div className="text-center text-white">
                              <div className="text-xs font-medium">Scratch Here</div>
                              <div className="text-xs opacity-75">👆 Hover to reveal</div>
                            </div>
                            
                            {/* Scratch texture effect */}
                            <motion.div
                              className="absolute inset-0 opacity-30"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm8 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-16 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z'/%3E%3C/g%3E%3C/svg%3E")`
                              }}
                            />
                          </motion.div>
                        </div>

                        <motion.p 
                          className="text-xs text-muted-foreground"
                          animate={{ opacity: isFeature4Hovering ? [0.5, 1, 0.5] : 0.7 }}
                          transition={{ duration: 2, repeat: isFeature4Hovering ? Infinity : 0 }}
                        >
                          Advanced animations and interactions
                        </motion.p>

                        {/* Feature highlights */}
                        <motion.div 
                          className="grid grid-cols-2 gap-2 text-xs"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isFeature4Hovering ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white/10 rounded px-2 py-1">Canvas API</div>
                          <div className="bg-white/10 rounded px-2 py-1">Touch Events</div>
                          <div className="bg-white/10 rounded px-2 py-1">WebGL</div>
                          <div className="bg-white/10 rounded px-2 py-1">Responsive</div>
                        </motion.div>
                      </div>

                      {/* Enhanced floating animation elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full ${
                              i % 3 === 0 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                              i % 3 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                              'bg-gradient-to-r from-yellow-400 to-orange-400'
                            }`}
                            style={{
                              left: `${5 + (i * 8)}%`,
                              top: `${15 + (i % 4) * 20}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isFeature4Hovering ? {
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              y: [0, -40, -80],
                              rotate: [0, 180, 360],
                            } : { opacity: 0, scale: 0, y: 0, rotate: 0 }}
                            transition={{
                              duration: 3,
                              delay: i * 0.1,
                              repeat: isFeature4Hovering ? Infinity : 0,
                              repeatType: "loop",
                            }}
                          />
                        ))}
                      </div>

                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isFeature4Hovering ? { 
                          opacity: [0, 0.5, 0],
                          scale: [0.8, 1.2, 0.8]
                        } : { opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 2,
                          repeat: isFeature4Hovering ? Infinity : 0,
                          repeatType: "loop",
                        }}
                      />

                      {/* Border animation */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={isFeature4Hovering ? {
                          opacity: [0, 0.5, 0],
                          rotate: [0, 180, 360]
                        } : { opacity: 0, rotate: 0 }}
                        transition={{
                          duration: 4,
                          repeat: isFeature4Hovering ? Infinity : 0,
                          ease: "linear",
                        }}
                      />
                    </motion.div>

                    {/* Orbiting elements around the card */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isFeature4Hovering ? {
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, Math.cos((i * 60) * Math.PI / 180) * 80],
                          y: [0, Math.sin((i * 60) * Math.PI / 180) * 80],
                          rotate: [0, 360],
                        } : { 
                          opacity: 0, 
                          scale: 0, 
                          x: 0, 
                          y: 0, 
                          rotate: 0 
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: isFeature4Hovering ? Infinity : 0,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  );
}
