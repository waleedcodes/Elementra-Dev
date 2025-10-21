"use client"
import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Send, 
  Check, 
  Gift, 
  Zap,
  Users,
  Bell,
  Sparkles,
  Lock
} from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || isSubscribed) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubscribed(true)
    setIsSubmitting(false)
    setEmail("")
  }

  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to try new components and features"
    },
    {
      icon: Gift,
      title: "Exclusive Content",
      description: "Access to premium templates and design resources"
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Tips and tricks from the Elementra UI community"
    },
    {
      icon: Bell,
      title: "Update Notifications",
      description: "Never miss important releases and updates"
    }
  ]

  const stats = [
    { label: "Subscribers", value: "25,000+" },
    { label: "Weekly Updates", value: "2-3" },
    { label: "Spam Rate", value: "0%" }
  ]

  if (isSubscribed) {
    return (
      <section ref={ref} className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="backdrop-blur-sm bg-green-500/10 border-green-500/20">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-green-400" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-green-400">
                  Welcome to the Family! 🎉
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  You're now part of the Elementra UI community. Check your email for a special welcome gift!
                </p>
                
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Gift className="w-4 h-4 mr-2" />
                  Welcome gift sent to your inbox
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Mail className="w-4 h-4 mr-2" />
            Stay Updated
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Join the Newsletter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the latest updates, exclusive content, and early access to new features. 
            Join thousands of developers in our growing community.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-background/80 border-white/10">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Never Miss an Update</h3>
                    <p className="text-muted-foreground">
                      Subscribe to get notified about new components, features, and exclusive content.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 h-12 bg-background/50 border-white/20 focus:border-primary/50"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-semibold"
                      disabled={isSubmitting || !email}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Subscribe Now
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Lock className="w-4 h-4" />
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-8">What You'll Get</h3>
              
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/30 border border-white/10 hover:bg-background/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Special Welcome Gift
                </h4>
                <p className="text-sm text-muted-foreground">
                  New subscribers get exclusive access to our premium component templates pack worth $99, absolutely free!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
