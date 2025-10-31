"use client"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Heart,
  Zap,
  Code,
  Palette
} from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "TechCorp",
      avatar: "/user1.png",
      rating: 5,
      content: "Elementra UI has revolutionized our development workflow. The components are beautifully designed, highly customizable, and the developer experience is incredible. We reduced our development time by 40%!",
      highlight: "Reduced development time by 40%",
      tags: ["Performance", "Design"],
      social: {
        twitter: "sarahchen_dev",
        github: "sarahchen"
      },
      featured: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Tech Lead",
      company: "StartupXYZ",
      avatar: "/user3.png",
      rating: 5,
      content: "The component library is fantastic! Easy to integrate, well-documented, and the theming system is powerful. Our entire team adopted it within a week. Highly recommended for any React project.",
      highlight: "Entire team adopted within a week",
      tags: ["Documentation", "Ease of Use"],
      social: {
        linkedin: "marcus-rodriguez",
        github: "marcusrod"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "UI/UX Designer",
      company: "DesignStudio Pro",
      avatar: "/user.png",
      rating: 5,
      content: "As a designer, I love how Elementra UI bridges the gap between design and development. The components maintain design consistency while being flexible enough for various use cases.",
      highlight: "Perfect design-dev bridge",
      tags: ["Design System", "Consistency"],
      social: {
        twitter: "emilywatson_ux",
        linkedin: "emily-watson-ux"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Full Stack Developer",
      company: "InnovateLab",
      avatar: "/user1.png",
      rating: 5,
      content: "The accessibility features are outstanding. Every component works perfectly with screen readers and keyboard navigation. It's rare to find a library that takes accessibility this seriously.",
      highlight: "Outstanding accessibility",
      tags: ["Accessibility", "Quality"],
      social: {
        github: "davidkim-dev",
        linkedin: "david-kim-fullstack"
      }
    },
    {
      id: 5,
      name: "Anna Kowalski",
      role: "Product Manager",
      company: "GrowthCo",
      avatar: "/user3.png",
      rating: 5,
      content: "From a product perspective, Elementra UI helped us ship features faster while maintaining high quality. The consistency across components means fewer design decisions and smoother user experiences.",
      highlight: "Faster shipping, higher quality",
      tags: ["Product", "Efficiency"],
      social: {
        twitter: "anna_pm",
        linkedin: "anna-kowalski-pm"
      }
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Indie Developer",
      company: "Solo Projects",
      avatar: "/user.png",
      rating: 5,
      content: "As an indie developer, Elementra UI is a game-changer. I can build professional-looking applications without spending weeks on UI components. The free tier is generous and the pro features are worth every penny.",
      highlight: "Game-changer for indie devs",
      tags: ["Indie Friendly", "Value"],
      social: {
        twitter: "alexthompson_dev",
        github: "alexthompson"
      }
    }
  ]

  const stats = [
    { icon: Heart, label: "Happy Users", value: "12,000+", color: "text-red-400" },
    { icon: Zap, label: "Components", value: "50+", color: "text-yellow-400" },
    { icon: Code, label: "Projects Built", value: "8,500+", color: "text-blue-400" },
    { icon: Palette, label: "Themes", value: "25+", color: "text-purple-400" }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
      />
    ))
  }

  const SocialIcon = ({ platform, username }) => {
    const icons = {
      twitter: Twitter,
      github: Github,
      linkedin: Linkedin
    }
    
    const Icon = icons[platform]
    if (!Icon) return null
    
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-primary/10"
        onClick={() => window.open(`https://${platform}.com/${username}`, '_blank')}
      >
        <Icon className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent px-4">
            Loved by Developers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            See what developers are saying about Elementra UI and how it's transforming their development workflow.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-background/80 border border-white/10">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="backdrop-blur-sm bg-background/80 border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <div className="text-center max-w-2xl">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6" />
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-4">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                      
                      {/* Highlight */}
                      <div className="mb-6">
                        <Badge variant="secondary" className="px-4 py-2">
                          {testimonials[currentIndex].highlight}
                        </Badge>
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-semibold">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold flex items-center gap-2">
                            {testimonials[currentIndex].name}
                            {testimonials[currentIndex].featured && (
                              <Badge variant="default" className="text-xs px-2 py-0">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                          </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-2 ml-4">
                          {testimonials[currentIndex].social?.twitter && (
                            <SocialIcon platform="twitter" username={testimonials[currentIndex].social.twitter} />
                          )}
                          {testimonials[currentIndex].social?.github && (
                            <SocialIcon platform="github" username={testimonials[currentIndex].social.github} />
                          )}
                          {testimonials[currentIndex].social?.linkedin && (
                            <SocialIcon platform="linkedin" username={testimonials[currentIndex].social.linkedin} />
                          )}
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex justify-center gap-2 mt-4">
                        {testimonials[currentIndex].tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAutoPlay(!autoPlay)}
              className="text-xs text-muted-foreground"
            >
              {autoPlay ? 'Pause' : 'Play'} Auto-rotation
            </Button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to join thousands of happy developers?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="flex items-center gap-2">
              Get Started Free
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View More Reviews
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
