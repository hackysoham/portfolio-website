# Soham Labhshetwar — ML Developer Portfolio

A stunning, dark-themed developer portfolio landing page built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ✨ Features

- **Hero Section** — Full-viewport intro with magnetic portrait hover effect, gradient typography, and staggered fade-in animations
- **Marquee Section** — Two-row scroll-driven image carousel with animated GIF previews
- **About Section** — Character-by-character scroll-reveal text animation with decorative 3D corner images
- **Skills Section** — Clean white section with 5 numbered skill areas (ML, Full-Stack, CP, DL/RL, Data Science)
- **Projects Section** — Sticky-stacking project cards showcasing Interview-Buddy AI, Snake Game RL Agent, and Veritas

## 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| React 18       | UI framework                   |
| TypeScript     | Type safety                    |
| Tailwind CSS 3 | Utility-first styling          |
| Framer Motion  | Animations & scroll effects    |
| Vite           | Build tool & dev server        |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd "portfolio website"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server will start at **http://localhost:5173**.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── project_interview_ai.png
│   ├── project_snake_rl.png
│   └── project_veritas.png
├── src/
│   ├── components/
│   │   ├── AnimatedText.tsx
│   │   ├── ContactButton.tsx
│   │   ├── FadeIn.tsx
│   │   ├── LiveProjectButton.tsx
│   │   └── Magnet.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx  (Skills)
│   │   └── ProjectsSection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Design System

- **Background:** `#0C0C0C`
- **Text:** `#D7E2EA`
- **Font:** [Kanit](https://fonts.google.com/specimen/Kanit) (300–900)
- **Gradient Text:** `linear-gradient(180deg, #646973 → #BBCCD7)`
- **CTA Gradient:** `linear-gradient(123deg, #18011F → #B600A8 → #7621B0 → #BE4C00)`

## 📱 Responsive

Mobile-first with Tailwind breakpoints and `clamp()` fluid typography.

---

## 📄 License

MIT
