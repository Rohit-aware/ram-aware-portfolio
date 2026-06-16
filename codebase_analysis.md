# Codebase Analysis: Ram Aware Portfolio

This file acts as a persistent reference mapping out the architecture, styles, dependencies, and key configurations of the Ram Aware Portfolio codebase. Reference this file when planning code updates or modifications.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 18.3.1 (TSX with TypeScript 5.4.5)
- **Tooling/Bundler**: Vite 5.3.1
- **Styling**: Tailwind CSS 3.4.4 + custom layers & variables
- **Animations**: Framer Motion 11.3.0
- **Icons**: Lucide React 0.383.0
- **Package Manager**: Bun (`bun.lock` in root)

---

## 📂 Project Architecture

The codebase adheres strictly to React SOLID design patterns, separating presentation layouts (UI) from state machines (Hooks) and isolating sub-components within local `components` folders:

```text
src/
├── features/                     # UI Sections (Lazy loaded cohesive chunk)
│   ├── about/                    # About Section
│   │   ├── constants/
│   │   │   └── aboutData.ts      # Static list items & copy copy copy
│   │   └── About.tsx             # Composes the Section wrapper
│   │
│   ├── achievements/             # Achievements Section
│   │   ├── components/
│   │   │   └── AchievementCard.tsx # Extracted single card layout
│   │   └── Achievements.tsx      # Renders grid wrapper
│   │
│   ├── contact/                  # Contact Details and Form CTAs
│   │   ├── constants/
│   │   │   └── contactData.ts    # Static contact items & counter stats
│   │   └── Contact.tsx
│   │
│   ├── experience/               # Career Timeline
│   │   ├── components/
│   │   │   ├── ExperienceTabs.tsx   # Company navigation selection tabs
│   │   │   └── ExperienceDetail.tsx # Work history highlight description
│   │   ├── hooks/
│   │   │   └── useExperience.ts    # Tracks selected company & highlights
│   │   └── Experience.tsx        # Timeline main page section
│   │
│   ├── expertise/                # Command Center (Tabbed Skills Matrix)
│   │   ├── components/
│   │   │   ├── ExpertiseTabs.tsx   # Skill category buttons list
│   │   │   ├── ExpertiseBanner.tsx # Dynamic gradient headers
│   │   │   └── SkillsGrid.tsx      # Target skill items
│   │   ├── hooks/
│   │   │   └── useExpertise.ts     # Active tab color, icon, and mapping states
│   │   └── Expertise.tsx         # Matrix layout composition orchestrator
│   │
│   ├── hero/                     # Hero Intro Section
│   │   ├── constants/
│   │   │   └── heroData.ts       # Hero static companies & icon arrays
│   │   └── Hero.tsx              # Banner with open-status and KPIs
│   │
│   ├── leadership/               # Team Management & SME roles
│   │   ├── components/
│   │   │   └── LeadershipCard.tsx  # Extracted card structure
│   │   ├── constants/
│   │   │   └── leadershipData.ts # Leadership cards list & stat metrics
│   │   └── Leadership.tsx        # Section layout composition
│   │
│   ├── metrics/                  # Animated Counters Grid
│   │   └── Metrics.tsx           # Intersection count-up wrappers
│   │
│   ├── projects/                 # Process Improvement Studies
│   │   ├── components/
│   │   │   └── ProjectCard.tsx     # Extracted project card layout
│   │   └── Projects.tsx          # Case studies main layout
│   │
│   └── MainContent.tsx           # Unified bundle consolidating below-the-fold features
│
├── shared/                       # Global assets, structures, and tools
│   ├── components/               # Layout elements
│   │   ├── Navbar/               # Navbar folder
│   │   │   ├── components/
│   │   │   │   ├── Logo.tsx      # SME logo title
│   │   │   │   ├── DesktopNav.tsx # Responsive horizontal links
│   │   │   │   └── MobileNav.tsx # Responsive vertical links menu modal
│   │   │   ├── hooks/
│   │   │   │   └── useNavbar.ts  # Scroll spy, toggles, scroll offsets
│   │   │   ├── index.ts          # Default Navbar export
│   │   │   └── Navbar.tsx        # Main header orchestration layout
│   │   │
│   │   ├── Footer.tsx            # Corporate bottom banner
│   │   ├── SectionHeader.tsx     # Standard visual label header
│   │   └── SectionWrapper.tsx    # Animation and viewport trigger wrap
│   │
│   ├── constants/                # Decoupled static metadata files
│   │   ├── data.ts               # Core mock data source for the portfolio items
│   │   └── theme.ts              # Design System color & gradient variables map
│   │
│   ├── context/                  # React State Contexts
│   │   └── ThemeContext.tsx      # Design system Context & ThemeProvider hook
│   │
│   ├── hooks/                    # useInView.ts (Intersection & CountUp animation logic)
│   └── types/                    # index.ts (TypeScript data contracts)
│
├── styles/                       # CSS Files
│   └── globals.css               # Base Tailwind layers, custom fonts, glassmorphism presets
│
├── App.tsx                       # Orchestrates lazy loading & overall UI layout
└── main.tsx                      # Mounts App component to HTML root
```

---

## 🎨 Design Tokens & System Context

The application utilizes a centralized, context-driven Design System provider (`ThemeProvider` inside [ThemeContext.tsx](file:///Users/mypcotdevelopment/Downloads/ram-aware-portfolio-v3/src/shared/context/ThemeContext.tsx)):
- **Context Injection**: Exposes a `useTheme` hook, allowing components to read brand specifications directly, avoiding prop-drilling.
- **Company Metadata Mappings**: Companies (`Ecolab`, `Amazon`, `Infosys`) have their branded color schemes and initials stored inside the theme file.
- **Category Gradient Mappings**: Expertise pillars read their specific background gradient class arrays and proficiency targets dynamically from the context.

---

## ⚡ Main Logic & Optimization Patterns

### 1. Code Splitting / Lazy Loading
To maximize performance metrics, the above-the-fold layouts (`Navbar`, `Hero`) load synchronously. The below-the-fold layouts are consolidated into a single lazy loaded component `MainContent.tsx`. This avoids staggered sequential chunk loading:
```tsx
const MainContent = lazy(() => import('@features/MainContent'));

// In layout...
<Suspense fallback={<Skeleton />}>
  <MainContent />
</Suspense>
```

### 2. Viewport Animation Triggers
The `SectionWrapper` component encapsulates every page section to trigger scroll animations automatically once entering the viewport using Framer Motion's `useInView`.

### 3. Custom CountUp animations
Numbers in the metrics panel count up smoothly when scrolled into focus using a lightweight custom hook:
```typescript
// useCountUp (src/shared/hooks/useInView.ts)
export function useCountUp(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  // Animates using cubic easing step and requestAnimationFrame
}
```

### 4. Custom Component Data Binding
All content displayed in the app is decoupled from UI presentation. Content modifications should be performed inside [data.ts](file:///Users/mypcotdevelopment/Downloads/ram-aware-portfolio-v3/src/shared/constants/data.ts) where components bind to defined interfaces.

### 5. Tailwind Dynamic Class Restriction
Do not construct Tailwind classes dynamically via string interpolation (e.g. `bg-${color}`). Tailwind CSS scans the source code statically. If class names are generated dynamically, Tailwind's scanner will not detect them, and they won't be bundled. Instead, map the full class names in a record map (e.g., `'bg-gradient-sys'`) and reference the full class string.
