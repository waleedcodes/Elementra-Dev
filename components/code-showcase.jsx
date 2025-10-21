"use client"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Copy, 
  Check, 
  Play, 
  Code2, 
  Terminal, 
  Package,
  Sparkles,
  Download,
  Eye,
  EyeOff
} from "lucide-react"

export function CodeShowcase() {
  const [copiedCode, setCopiedCode] = useState(null)
  const [activeTab, setActiveTab] = useState("install")
  const [isPreviewVisible, setIsPreviewVisible] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const codeExamples = {
    install: {
      title: "Installation",
      language: "bash",
      code: `# Install Elementra UI
npm install elementra-ui

# Or with yarn
yarn add elementra-ui

# Setup configuration
npx elementra-ui init`,
      preview: null
    },
    usage: {
      title: "Basic Usage",
      language: "tsx",
      code: `import { Button, Card, Badge } from 'elementra-ui'

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to Elementra UI
      </h2>
      <div className="flex gap-2 mb-4">
        <Badge variant="primary">New</Badge>
        <Badge variant="secondary">Featured</Badge>
      </div>
      <Button 
        onClick={() => alert('Hello!')}
        className="w-full"
      >
        Get Started
      </Button>
    </Card>
  )
}`,
      preview: "card-example"
    },
    advanced: {
      title: "Advanced Features",
      language: "tsx",
      code: `import { 
  Card, 
  Progress, 
  Switch, 
  Alert 
} from 'elementra-ui'
import { useState } from 'react'

function Dashboard() {
  const [progress, setProgress] = useState(75)
  const [notifications, setNotifications] = useState(true)
  
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Project Progress</h3>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-3">
          <Switch 
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <span>Enable Notifications</span>
        </div>
      </Card>
      
      {notifications && (
        <Alert variant="success">
          Notifications are enabled!
        </Alert>
      )}
    </div>
  )
}`,
      preview: "dashboard-example"
    },
    theming: {
      title: "Custom Theming",
      language: "css",
      code: `:root {
  /* Primary colors */
  --primary: 231 138 83;
  --primary-foreground: 255 255 255;
  
  /* Secondary colors */
  --secondary: 241 245 249;
  --secondary-foreground: 15 23 42;
  
  /* Custom component styles */
  --card-background: rgba(255, 255, 255, 0.1);
  --card-border: rgba(255, 255, 255, 0.2);
  
  /* Animation variables */
  --animation-duration: 0.3s;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark mode overrides */
.dark {
  --card-background: rgba(0, 0, 0, 0.3);
  --card-border: rgba(255, 255, 255, 0.1);
}`,
      preview: "theme-example"
    }
  }

  const PreviewComponent = ({ type }) => {
    switch (type) {
      case "card-example":
        return (
          <Card className="p-6 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Welcome to Elementra UI</h2>
            <div className="flex gap-2 mb-4">
              <Badge>New</Badge>
              <Badge variant="secondary">Featured</Badge>
            </div>
            <Button className="w-full">Get Started</Button>
          </Card>
        )
      
      case "dashboard-example":
        return (
          <div className="space-y-4 max-w-md">
            <Card className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Project Progress</h3>
                <span className="text-sm">75%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div 
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-5 bg-primary rounded-full relative">
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-0.5"
                    initial={{ x: 2 }}
                    animate={{ x: 18 }}
                    transition={{ duration: 0.3, delay: 1 }}
                  />
                </div>
                <span className="text-sm">Enable Notifications</span>
              </div>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <div className="text-sm text-green-400">Notifications are enabled!</div>
              </div>
            </motion.div>
          </div>
        )
      
      case "theme-example":
        return (
          <div className="space-y-3 max-w-md">
            <div className="grid grid-cols-3 gap-3">
              <motion.div 
                className="h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                className="h-16 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/40"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                className="h-16 rounded-lg bg-gradient-to-br from-muted/20 to-muted/40"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Customizable color system
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Code2 className="w-4 h-4 mr-2" />
            Developer Experience
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Ready to Code?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with Elementra UI in minutes. Copy, paste, and customize to your heart's content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-background/80 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Code Examples
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPreviewVisible(!isPreviewVisible)}
                    className="flex items-center gap-2"
                  >
                    {isPreviewVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {isPreviewVisible ? "Hide" : "Show"} Preview
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  {Object.entries(codeExamples).map(([key, example]) => (
                    <TabsTrigger key={key} value={key} className="text-sm">
                      {example.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(codeExamples).map(([key, example]) => (
                  <TabsContent key={key} value={key}>
                    <div className={`grid gap-6 ${example.preview && isPreviewVisible ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
                      {/* Code Block */}
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{example.title}</span>
                            <Badge variant="secondary" className="text-xs">
                              {example.language}
                            </Badge>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(example.code, key)}
                            className="flex items-center gap-2"
                          >
                            <AnimatePresence mode="wait">
                              {copiedCode === key ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center gap-1"
                                >
                                  <Check className="w-4 h-4 text-green-500" />
                                  <span className="text-xs">Copied!</span>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="copy"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center gap-1"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span className="text-xs">Copy</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-lg bg-black/90 border border-white/10">
                          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-white/60">
                              {example.language === 'bash' ? 'Terminal' : `${example.title}.${example.language}`}
                            </span>
                          </div>
                          
                          <pre className="p-4 text-sm overflow-x-auto">
                            <code className={`language-${example.language} text-green-400`}>
                              {example.code}
                            </code>
                          </pre>
                        </div>
                      </div>

                      {/* Preview */}
                      {example.preview && isPreviewVisible && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex flex-col"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Play className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Live Preview</span>
                          </div>
                          
                          <div className="flex-1 bg-background/50 rounded-lg border border-white/10 p-6 flex items-center justify-center min-h-[300px]">
                            <PreviewComponent type={example.preview} />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <Button size="lg" className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Get Started
          </Button>
          
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            View Documentation
          </Button>
          
          <Button variant="ghost" size="lg" className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Explore Examples
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
