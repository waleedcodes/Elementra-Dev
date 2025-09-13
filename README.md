# 🚀 Elementra UI

<div align="center">
  <h3>Your Building Blocks for Modern UIs</h3>
  <p>
    <a href="https://www.npmjs.com/package/elementra-ui">
      <img src="https://img.shields.io/npm/v/elementra-ui.svg" alt="npm version" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
    </a>
    <a href="https://www.npmjs.com/package/elementra-ui">
      <img src="https://img.shields.io/npm/dm/elementra-ui.svg" alt="Downloads" />
    </a>
  </p>
  <p>
    <a href="https://elementra-ui.vercel.app/docs/">Documentation</a> •
    <a href="https://github.com/elementra-ui/discussions">Discussions</a> •
    <a href="https://youtube.com/@waleedcodes">YouTube</a> •
    <a href="https://twitter.com/waleedcodes">Twitter</a>
  </p>
</div>

---

## ✨ Overview

**Elementra UI** is a modern, reusable component library for React, Next.js, and beyond. Build stunning, accessible, and responsive UIs faster than ever—powered by **Tailwind CSS** and **Framer Motion**.

---

## 🎁 Features

- 🎨 **Modern Design** — Beautiful, consistent, and themeable components
- 📱 **Responsive** — Works seamlessly across all devices
- ♿ **Accessible** — WAI-ARIA standards for everyone
- 🎭 **Animated** — Smooth transitions with Framer Motion
- ⚡ **Easy Integration** — Plug-and-play with React/Next.js
- 🛠️ **Customizable** — Tailwind CSS for effortless theming

---

## 🧱 Available Components

| Component                        | Description                   |
| -------------------------------- | ----------------------------- |
| 🔘 **Button**                    | Versatile button styles       |
| 🎯 **Alert**                     | Informative alert banners     |
| 🏷️ **Badge**                     | Status and label badges       |
| 💳 **Card**                      | Flexible content containers   |
| 🖼️ **Modal**                     | Accessible modal dialogs      |
| 📊 **Progress**                  | Progress indicators           |
| 📝 **Select**                    | Custom select dropdowns       |
| 🔄 **Switch**                    | Toggle switches               |
| 📑 **Tabs**                      | Tabbed navigation             |
| 🍞 **Toast**                     | Toast notifications           |
| 🌟 **Fancy Testimonials Slider** | Animated testimonial carousel |
| ✍️ **React Signature**           | Signature pad input           |
| 🪄 **Scratch to Reveal**         | Scratch-off effect component  |
| ⌨️ **Input**                     | Text/password/email inputs    |
| ☰ **Dropdown Menu**              | Context and action menus      |
| 💬 **Tooltip**                   | Hover/focus hints             |

> ...and more coming soon!

---

## 📦 Installation

```bash
# With npm
npm install elementra-ui

# Or from GitHub Packages
npm install @waleedcodes/elementra-ui
```

---

## ⚡ Quick Start

1. **Install peer dependencies:**

   ```bash
   npm install clsx tailwind-merge
   ```

2. **Add components using the CLI:**

   ```bash
   npx elementra-ui add
   ```

   _Use arrow keys to select, spacebar to multi-select, and enter to confirm._

3. **Import and use in your app:**

   ```jsx
   import { Button } from "@/components/ui/button";

   export default function App() {
     return <Button variant="default">Click me</Button>;
   }
   ```

---

## 📎 Usage Examples

```jsx
// Input
import { Input } from "@/components/ui/input";

export function ExampleInput() {
  return (
    <div className="space-y-3">
      <Input placeholder="Your name" size="md" />
      <Input type="password" placeholder="Password" intent="error" />
      <Input
        placeholder="With counter"
        maxLength={20}
        value="Hello"
        onChange={() => {}}
      />
    </div>
  );
}
```

```jsx
// Dropdown Menu
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function ExampleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => alert("Profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert("Settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

```jsx
// Tooltip
import { Tooltip } from "@/components/ui/tooltip";

export function ExampleTooltip() {
  return (
    <Tooltip content="Save changes" side="top">
      <button className="rounded-md border bg-background px-3 py-2 text-sm">
        Hover me
      </button>
    </Tooltip>
  );
}
```

---

## 🎨 Tailwind CSS Setup

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/components/**/*.{js,jsx}"],
  plugins: [require("tailwindcss-animate")],
};
```

---

## 📚 Documentation

Explore the [full documentation](https://elementra-ui.vercel.app/docs/) for:

- Component APIs & props
- Interactive examples
- Theming & customization
- Best practices
- Migration guides

---

## 🤝 Community & Support

- 💬 [GitHub Discussions](https://github.com/elementra-ui/discussions)
- 📺 [YouTube Channel](https://youtube.com/@waleedcodes)
- 🐦 [Twitter](https://twitter.com/waleedcodes)
- 📝 [Blog](https://elementra-ui.vercel.app/blog)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/waleedcodes">@waleedcodes</a> & contributors.<br/>
  © 2025 Elementra UI. All rights reserved.
</div>
