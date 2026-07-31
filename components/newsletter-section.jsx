import { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Mail, Zap, Gift, Users, Bell } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubscribed) return;

    if (!email) {
      setError("Please enter your email address");
      emailRef.current?.focus();
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      emailRef.current?.focus();
      return;
    }

    setError("");
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to try new components and features",
    },
    {
      icon: Gift,
      title: "Exclusive Content",
      description: "Access to premium templates and design resources",
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Tips and tricks from the Elementra UI community",
    },
    {
      icon: Bell,
      title: "Update Notifications",
      description: "Never miss important releases and updates",
    },
  ];

  const stats = [
    { label: "Subscribers", value: "25,000+" },
    { label: "Weekly Updates", value: "2-3" },
    { label: "Spam Rate", value: "0%" },
  ];

  if (isSubscribed) {
    return (
      <section className="py-24 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-2xl">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Welcome to the Family! 🎉
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              You're now part of the Elementra UI community. Check your email
              for a special welcome gift!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
              <span>🎁</span>
              Welcome gift sent to your inbox
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full mb-4 sm:mb-6 text-sm text-muted-foreground bg-card">
            <Mail className="w-3.5 h-3.5" />
            Stay Updated
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Join the Newsletter
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Get the latest updates, exclusive content, and early access to new
            features. Join thousands of developers in our growing community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Newsletter Form */}
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                  Never Miss an Update
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Subscribe to get notified about new components, features, and
                  exclusive content.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="newsletter-email"
                    ref={emailRef}
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                    className="h-14 text-lg"
                    required
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !email}
                  className="w-full h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold rounded-lg transition-all flex items-center justify-center gap-2 text-base sm:text-lg shadow-sm"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Subscribe Now
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-base sm:text-lg font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
                What You'll Get
              </h3>

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="p-5 sm:p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base text-foreground">
                  <Gift className="w-5 h-5 text-primary" />
                  Special Welcome Gift
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  New subscribers get exclusive access to our premium component
                  templates pack worth $99, absolutely free!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
