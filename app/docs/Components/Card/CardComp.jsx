"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  BarChart,
  Star,
  Shield,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
  CardBadge,
  CardIcon,
} from "@/components/card";

const CardComp = () => {
  return (
    <div className="space-y-8">
      {/* Card Variants */}
      <section>
        <h2 className="text-xl font-medium flex items-center gap-2 mb-6">
          <span className="text-muted-foreground dark:text-white">
            Card Variants
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
          {/* Default Card */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                This is the default card style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card uses the default styling.</p>
            </CardContent>
            <CardFooter>
              <Button className="min-w-[100px]">Action</Button>
            </CardFooter>
          </Card>

          {/* Flat Card */}
          <Card variant="flat" className="w-full">
            <CardHeader>
              <CardTitle>Flat Card</CardTitle>
              <CardDescription>A flat design card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a flat design with subtle hover effect.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="min-w-[100px]">Learn More</Button>
            </CardFooter>
          </Card>

          {/* Elevated Card */}
          <Card variant="elevated" className="w-full">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>
                An elevated card with hover effects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a shadow and elevates on hover.</p>
            </CardContent>
            <CardFooter>
              <Button className="min-w-[100px]">Explore</Button>
            </CardFooter>
          </Card>

          {/* Outlined Card */}
          <Card variant="outlined" className="w-full">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>A card with an outline</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has an outline that changes on hover.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="min-w-[100px]">Details</Button>
            </CardFooter>
          </Card>

          {/* Gradient Card */}
          <Card variant="gradient" className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Gradient Card</CardTitle>
              <CardDescription className="text-white/80">
                A card with a gradient background
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                This card features a gradient background.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="min-w-[100px]">Action</Button>
            </CardFooter>
          </Card>

          {/* Glass Card */}
          <Card variant="glass" className="w-full">
            <CardHeader>
              <CardTitle className="text-foreground">Glass Card</CardTitle>
              <CardDescription className="text-foreground/70">
                A card with a glass effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">
                This card has a glass-like appearance.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="min-w-[100px]">Proceed</Button>
            </CardFooter>
          </Card>

          {/* Neon Card */}
          <Card variant="neon" className="w-full">
            <CardHeader>
              <CardTitle>Neon Card</CardTitle>
              <CardDescription>
                A card with a neon glow effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a neon glow effect on hover.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-white border-white min-w-[100px]">
                Glow
              </Button>
            </CardFooter>
          </Card>

          {/* Interactive Card */}
          <Card variant="interactive" className="w-full">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>
                A card that responds to interaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card scales and changes shadow on hover.</p>
            </CardContent>
            <CardFooter>
              <Button className="min-w-[100px]">Interact</Button>
            </CardFooter>
          </Card>

          {/* Minimal Card */}
          <Card variant="minimal" className="w-full">
            <CardHeader>
              <CardTitle>Minimal Card</CardTitle>
              <CardDescription>A minimalistic card design</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a very subtle design.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="min-w-[100px]">More</Button>
            </CardFooter>
          </Card>

          {/* Floating Card */}
          <Card variant="floating" className="w-full">
            <CardHeader>
              <CardTitle>Floating Card</CardTitle>
              <CardDescription>A card with a floating effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card appears to float on hover.</p>
            </CardContent>
            <CardFooter>
              <Button className="min-w-[100px]">Lift</Button>
            </CardFooter>
          </Card>

          {/* Register Card */}
          <Card variant="register" className="w-full">
            <CardHeader>
              <CardIcon icon={Shield} />
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Sign up for a new account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Input fields would go here */}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Register</Button>
            </CardFooter>
          </Card>

          {/* Testimonial Card */}
          <Card variant="testimonial" className="w-full">
            <CardContent>
              <div className="flex items-center mb-4">
                <img
                 src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <CardTitle className="text-lg">Jane Doe</CardTitle>
                  <CardDescription>Happy Customer</CardDescription>
                </div>
              </div>
              <p className="italic">
                "This product has completely transformed my workflow. I can't
                imagine working without it now!"
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </CardFooter>
          </Card>

          {/* Login Card */}
          <Card variant="login" className="w-full">
            <CardHeader variant="login">
              <CardIcon icon={User} />
              <CardTitle variant="login">Log In</CardTitle>
              <CardDescription variant="login">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent variant="login">
              {/* Input fields would go here */}
            </CardContent>
            <CardFooter variant="login">
              <Button className="w-full">Sign In</Button>
            </CardFooter>
          </Card>

          {/* Pricing Card */}
          <Card variant="pricing" className="w-full">
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">
                $49<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-green-500" /> Unlimited
                  projects
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-green-500" /> Advanced
                  analytics
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-green-500" /> 24/7 support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>

          {/* Dashboard Card */}
          <Card variant="dashboard" className="w-full">
            <CardHeader variant="dashboard">
              <CardTitle variant="dashboard">Monthly Sales</CardTitle>
              <CardIcon icon={BarChart} />
            </CardHeader>
            <CardContent variant="dashboard">
              <div className="text-3xl font-bold">$24,560</div>
              <CardDescription variant="dashboard">
                18% increase from last month
              </CardDescription>
              <div className="mt-4 h-32 bg-gray-100 rounded-md"></div>
            </CardContent>
            <CardFooter variant="dashboard">
              <Button variant="outline" size="sm" className="min-w-[100px]">
                View Report
              </Button>
            </CardFooter>
          </Card>

          {/* E-commerce Card */}
          <Card variant="ecommerce" className="w-full">
            <CardImage
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-48 w-full object-cover"
            />
            <CardHeader variant="ecommerce">
              <CardTitle variant="ecommerce">Premium Headphones</CardTitle>
              <CardBadge>New</CardBadge>
            </CardHeader>
            <CardContent variant="ecommerce">
              <CardDescription variant="ecommerce">
                High-quality wireless headphones with noise cancellation.
              </CardDescription>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold">$299.99</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">4.8 (120)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter variant="ecommerce">
              <Button variant="outline" size="sm" className="min-w-[120px]">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardComp;
