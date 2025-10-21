"use client"
import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/Progress"
import { Switch } from "@/components/Switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Code2, Palette, Zap, Download, Copy, Play, Pause, RotateCcw } from "lucide-react"

export function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState("buttons")
  const [progress, setProgress] = useState(45)
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newValue = prev >= 100 ? 0 : prev + (5 * animationSpeed)
          return Math.min(newValue, 100)
        })
      }, 200)
    }
    return () => clearInterval(interval)
  }, [isPlaying, animationSpeed])

  const demoSections = [
    {
      id: "buttons",
      name: "Buttons & Badges",
      icon: Zap,
      description: "Interactive buttons with various styles and animations",
    },
    {
      id: "forms",
      name: "Form Controls",
      icon: Code2,
      description: "Switches, inputs, and form elements",
    },
    {
      id: "feedback",
      name: "Feedback",
      icon: Palette,
      description: "Progress bars, alerts, and status indicators",
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Play className="w-4 h-4 mr-2" />
            Interactive Playground
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Try Components Live
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience Elementra UI components in action. No installation required – just click, interact, and see the magic happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-6 backdrop-blur-sm bg-background/80 border-white/10">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Component Playground</CardTitle>
                  <CardDescription>
                    Interact with live components and see their behavior in real-time
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setProgress(0)
                      setSwitchEnabled(false)
                      setIsPlaying(false)
                    }}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  {demoSections.map((section) => (
                    <TabsTrigger key={section.id} value={section.id} className="flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{section.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="buttons" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Button Variants</h4>
                        <div className="flex flex-wrap gap-3">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button>Primary</Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="secondary">Secondary</Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline">Outline</Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="ghost">Ghost</Button>
                          </motion.div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Interactive Badges</h4>
                        <div className="flex flex-wrap gap-2">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Badge className="cursor-pointer">New</Badge>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Badge variant="secondary" className="cursor-pointer">Beta</Badge>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Badge variant="outline" className="cursor-pointer">Popular</Badge>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: -1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Badge variant="destructive" className="cursor-pointer">Hot</Badge>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Code Preview</h4>
                      <div className="bg-black/90 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
                        <div className="text-blue-300">// Button Component Usage</div>
                        <div className="text-white mt-2">
                          <span className="text-purple-300">&lt;Button</span>
                          <span className="text-yellow-300"> variant=</span>
                          <span className="text-green-300">"primary"</span>
                          <span className="text-purple-300">&gt;</span>
                        </div>
                        <div className="ml-2 text-white">Click me</div>
                        <div className="text-purple-300">&lt;/Button&gt;</div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="forms" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Form Controls</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <Switch 
                              checked={switchEnabled} 
                              onCheckedChange={setSwitchEnabled}
                            />
                            <Label className="text-base">
                              Enable notifications {switchEnabled ? "✓" : "✗"}
                            </Label>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="demo-input">Email Address</Label>
                            <Input 
                              id="demo-input"
                              type="email"
                              placeholder="Enter your email..."
                              className="transition-all duration-200"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Animation Speed: {animationSpeed}x</Label>
                            <input
                              type="range"
                              min="0.5"
                              max="3"
                              step="0.5"
                              value={animationSpeed}
                              onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Live State</h4>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Switch:</span> {switchEnabled ? "ON" : "OFF"}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Animation:</span> {isPlaying ? "Playing" : "Paused"}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Speed:</span> {animationSpeed}x
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="feedback" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Progress Indicators</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Upload Progress</span>
                              <span>{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="w-full" />
                          </div>
                          
                          <Alert>
                            <Zap className="h-4 w-4" />
                            <AlertTitle>Pro Tip!</AlertTitle>
                            <AlertDescription>
                              Click the play button to see the progress bar animate automatically.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Real-time Feedback</h4>
                      <motion.div
                        className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20"
                        animate={{
                          scale: progress > 80 ? [1, 1.02, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: progress > 80 ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      >
                        <div className="text-sm">
                          {progress < 25 && "🚀 Getting started..."}
                          {progress >= 25 && progress < 50 && "⚡ Making progress..."}
                          {progress >= 50 && progress < 75 && "🔥 Almost there..."}
                          {progress >= 75 && progress < 100 && "✨ Nearly complete!"}
                          {progress >= 100 && "🎉 Complete!"}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
