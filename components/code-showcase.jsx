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

  // Enhanced syntax highlighter with window header and realistic theme
  const SyntaxHighlight = ({ code, language = "tsx", fileName = "snippet" }) => {
    const escapeHtml = (str) =>
      str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const classes = {
      base: "text-[#9af69d]",
      comment: "text-[#6b6b6b]",
      keyword: "text-[#f08fb0]",
      func: "text-[#7fe3d6]",
      string: "text-[#c1ffdb]",
      number: "text-[#9ae0b2]",
      tag: "text-[#f6d58a]",
      plain: "text-[#d1d5db]",
    };

    // Tokenize in a single pass to preserve order and avoid nested replacements
    const tokenize = (input, lang) => {
      const patterns = {
        tsx: [
          { type: "comment", rx: /\/\*[\s\S]*?\*\/|\/\/.*$/m },
          { type: "string", rx: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
          { type: "keyword", rx: /\b(?:import|export|from|function|return|const|let|var|if|else|switch|case|break|new|class|extends|interface|type)\b/ },
          { type: "func", rx: /\b(?:useState|useEffect|useRef|React|console|set[A-Z]\w*)\b/ },
          { type: "number", rx: /\b\d+\b/ },
          { type: "tag", rx: /<\/?[A-Za-z][\w\-:\.]*/ },
        ],
        bash: [
          { type: "comment", rx: /#.*$/m },
          { type: "string", rx: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
          { type: "keyword", rx: /\b(?:npm|yarn|npx|pnpm|echo)\b/ },
          { type: "func", rx: /\b(?:install|add|init|run)\b/ },
          { type: "number", rx: /\b\d+\b/ },
        ],
        css: [
          { type: "comment", rx: /\/\*[\s\S]*?\*\// },
          { type: "string", rx: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
          { type: "tag", rx: /[.#][\w-]+/ },
          { type: "func", rx: /--[\w-]+/ },
          { type: "number", rx: /\b\d+\b/ },
        ],
      };

      const rules = patterns[lang] || patterns.tsx;
      const master = new RegExp(rules.map((r) => `(${r.rx.source})`).join("|"), "gm");

      const tokens = [];
      let lastIndex = 0;
      let m;

      while ((m = master.exec(input)) !== null) {
        const idx = m.index;
        if (idx > lastIndex) {
          tokens.push({ type: "plain", value: input.slice(lastIndex, idx) });
        }

        // find which group matched
        let matched = null;
        let offset = 1;
        for (const r of rules) {
          if (m[offset] !== undefined) {
            matched = { type: r.type, value: m[offset] };
            break;
          }
          offset++;
        }

        if (!matched) matched = { type: "plain", value: m[0] };
        tokens.push(matched);
        lastIndex = master.lastIndex;
      }

      if (lastIndex < input.length) {
        tokens.push({ type: "plain", value: input.slice(lastIndex) });
      }

      return tokens;
    };

    const tokens = tokenize(code, language);

    return (
      <div className="rounded-lg overflow-hidden shadow-2xl border border-white/6">
        <div className="flex items-center justify-between px-3 py-2 bg-[#0b0c0d] border-b border-white/6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
          </div>
          <div className="text-xs text-[#9aa6b2] font-medium tracking-wide">
            {fileName} <span className="ml-2 px-2 py-0.5 rounded bg-white/3 text-[10px] uppercase">{language}</span>
          </div>
          <div className="w-6" />
        </div>

        <pre className="p-4 text-sm overflow-x-auto max-h-[420px] bg-[#071012]">
          <code className="block font-mono whitespace-pre leading-relaxed">
            {tokens.map((t, i) => {
              const cls = classes[t.type] || classes.plain;
              return (
                <span key={i} className={cls}>
                  {escapeHtml(t.value)}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    );
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2">
            <Code2 className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Developer Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent px-4">
            Ready to Code?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
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
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Terminal className="w-4 sm:w-5 h-4 sm:h-5" />
                  Code Examples
                </CardTitle>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPreviewVisible(!isPreviewVisible)}
                    className="flex items-center gap-2 flex-1 sm:flex-none justify-center"
                  >
                    {isPreviewVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {isPreviewVisible ? "Hide" : "Show"} Preview
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
                <TabsList className="flex items-center justify-around w-full gap-2 mb-6 p-2 h-16">
                  {Object.entries(codeExamples).map(([key, example]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="text-sm rounded-md px-6 py-3 hover:bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    >
                      {example.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(codeExamples).map(([key, example]) => (
                  <TabsContent key={key} value={key}>
                    <div className={`grid gap-6 pt-16 ${example.preview && isPreviewVisible ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
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
                            aria-label={`Copy ${example.title} code`}
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
                            <span className="sr-only" aria-live="polite">{copiedCode === key ? 'Code copied to clipboard' : ''}</span>
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
                          
                          <SyntaxHighlight code={example.code} language={example.language} fileName={`${example.title}.${example.language}`} />
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
                          
                          <div className="flex-1 bg-background/50 rounded-lg border border-white/10 p-6 flex items-center justify-center min-h-[220px] md:min-h-[300px]">
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
          className="flex flex-wrap items-center justify-center gap-10 mt-12"
        >
          <Button
            size="lg"
            className="flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-95 py-6"
            aria-label="Get started with Elementra UI"
          >
            <Download className="w-5 h-5" />
            Get Started
          </Button>
          
          <Button variant="outline" size="lg" className="flex items-center gap-2 py-6">
            <Code2 className="w-5 h-5" />
            View Documentation
          </Button>
          
          <Button variant="secondary" size="lg" className="flex items-center gap-2 text-white py-6">
            <Sparkles className="w-5 h-5" />
            Explore Examples
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
