import { useState, useRef } from "react";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  // Simple email validation
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubscribed) return;

    // basic validation
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  const benefits = [
    {
      icon: "⚡",
      title: "Early Access",
      description: "Be the first to try new components and features",
    },
    {
      icon: "🎁",
      title: "Exclusive Content",
      description: "Access to premium templates and design resources",
    },
    {
      icon: "👥",
      title: "Community Insights",
      description: "Tips and tricks from the Elementra UI community",
    },
    {
      icon: "🔔",
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
      <section className="py-24 bg-gradient-to-br from-purple-500/10 via-gray-900 to-blue-500/10 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-2xl">
          <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl shadow-2xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-5xl">✓</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">
              Welcome to the Family! 🎉
            </h3>

            <p className="text-base sm:text-lg text-gray-300 mb-6">
              You're now part of the Elementra UI community. Check your email
              for a special welcome gift!
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm">
              <span>🎁</span>
              Welcome gift sent to your inbox
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-500/5 via-gray-900 to-blue-500/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full mb-4 sm:mb-6 text-sm">
            <span>📧</span>
            Stay Updated
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Join the Newsletter
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get the latest updates, exclusive content, and early access to new
            features. Join thousands of developers in our growing community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Newsletter Form */}
            <div>
              <div className="backdrop-blur-sm bg-gray-800/80 border border-white/10 rounded-xl shadow-2xl p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Never Miss an Update
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    Subscribe to get notified about new components, features,
                    and exclusive content.
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

                    {/* Error message */}
                    {error && <p className="text-sm text-red-400">{error}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email}
                    className="w-full h-12 bg-primary hover:bg-primary disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-base sm:text-lg"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>📤</span>
                        Subscribe Now
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>🔒</span>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-white/10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-base sm:text-lg font-bold text-purple-400">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                What You'll Get
              </h3>

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-lg bg-gray-800/30 border border-white/10 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-xl">🎁</span>
                  Special Welcome Gift
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
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
