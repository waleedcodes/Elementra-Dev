import React from 'react';

export default function Footer() {
  const navigationLinks = [
    { href: "/", label: "Home", icon: "✨" },
    { href: "/docs", label: "Documentation", icon: "📖" },
    { href: "/docs/Components", label: "Components", icon: "🎨" },
    { href: "/docs/Installation", label: "Installation", icon: "💻" },
  ];

  const socialLinks = [
    { href: "https://github.com/waleedcodes/Elementra-Dev", label: "GitHub", icon: "💻" },
    { href: "https://twitter.com", label: "Twitter", icon: "🐦" },
    { href: "https://discord.gg", label: "Discord", icon: "💬" },
  ];

  return (
    <footer className="bg-gradient-to-tr from-purple-500/5 via-gray-900 to-blue-500/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Elementra Dev
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Building beautiful, modern components for developers who care about design and user experience.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-purple-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Elementra Dev. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}