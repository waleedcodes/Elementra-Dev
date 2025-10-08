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

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const [baseColor, setBaseColor] = useState([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized

  const [dark, setDark] = useState(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]) // #e78a53
    setGlowColor([0.906, 0.541, 0.325]) // #e78a53
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

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
                <div className="pointer-events-none flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-md space-y-8">
                    {/* Badges Section */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Badges</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Buttons</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Primary</Button>
                        <Button variant="secondary" size="sm">Secondary</Button>
                        <Button variant="outline" size="sm">Outline</Button>
                        <Button variant="ghost" size="sm">Ghost</Button>
                      </div>
                    </motion.div>

                    {/* Switch Section */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isCliHovering ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Switch</h4>
                      <div className="flex items-center gap-4">
                        <Switch />
                        <span className="text-sm">Toggle switch</span>
                      </div>
                    </motion.div>

                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
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
                    {/* Card Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Card className="w-full">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Sample Card</CardTitle>
                          <CardDescription>
                            Beautiful card component with header and content.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Card content goes here with elegant styling.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Progress Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="w-full" />
                    </motion.div>

                    {/* Alert Component */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Alert>
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>
                          Your changes have been saved successfully.
                        </AlertDescription>
                      </Alert>
                    </motion.div>

                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
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
                      className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm p-6"
                    >
                      {/* Testimonial Preview */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                          <div>
                            <div className="font-medium text-sm">John Doe</div>
                            <div className="text-xs text-muted-foreground">CEO, Company</div>
                          </div>
                        </div>
                        <blockquote className="text-sm text-muted-foreground italic">
                          "Elementra UI components are absolutely amazing! They've transformed our development workflow."
                        </blockquote>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.svg
                              key={i}
                              className="w-4 h-4 fill-yellow-400"
                              viewBox="0 0 20 20"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isFeature3Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                          ))}
                        </div>
                      </div>

                      {/* Floating particles effect */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          initial={{ opacity: 0, y: 0 }}
                          animate={isFeature3Hovering ? {
                            opacity: [0, 1, 0],
                            y: [-20, -40, -60],
                          } : { opacity: 0, y: 0 }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: isFeature3Hovering ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        />
                      ))}
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
                      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isFeature4Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Scratch to Reveal Preview */}
                      <div className="text-center space-y-4">
                        <div className="text-lg font-semibold">🎁 Surprise!</div>
                        <div className="relative">
                          <div className="w-24 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            REWARD
                          </div>
                          {/* Scratched overlay effect */}
                          <motion.div
                            className="absolute inset-0 bg-gray-400 rounded-lg"
                            initial={{ opacity: 1 }}
                            animate={isFeature4Hovering ? { opacity: [1, 0.5, 0] } : { opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Scratch to reveal hidden content
                        </p>
                      </div>

                      {/* Floating animation elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                            style={{
                              left: `${10 + (i * 12)}%`,
                              top: `${20 + (i % 3) * 20}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isFeature4Hovering ? {
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              y: [0, -30, -60],
                            } : { opacity: 0, scale: 0, y: 0 }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              repeat: isFeature4Hovering ? Infinity : 0,
                              repeatType: "loop",
                            }}
                          />
                        ))}
                      </div>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        animate={isFeature4Hovering ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Additional floating elements around the card */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        style={{
                          left: i % 2 === 0 ? '-10px' : 'calc(100% + 10px)',
                          top: `${25 + i * 20}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isFeature4Hovering ? {
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        } : { opacity: 0, scale: 0, rotate: 0 }}
                        transition={{
                          duration: 3,
                          delay: i * 0.3,
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
