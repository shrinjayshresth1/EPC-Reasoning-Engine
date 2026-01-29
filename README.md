# EPC Management System

A modern, feature-rich Engineering, Procurement, and Construction (EPC) management application built with React and Vite. This system provides comprehensive project management capabilities with AI-powered insights, risk analysis, vendor management, and real-time collaboration features.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-6.0.3-646CFF.svg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Environment Configuration](#environment-configuration)
- [Theme System](#theme-system)
- [Contributing](#contributing)

## Features

### Core Functionality

- **Project Dashboard** - Comprehensive overview of project metrics, budgets, and milestones
- **AI-Powered Chat** - Intelligent assistant for project insights and recommendations
- **Specification Review** - Document management and review system
- **Risk Analysis** - Real-time risk assessment and monitoring
- **Vendor Management** - Streamlined vendor onboarding and management
- **Settings and Configuration** - Customizable user preferences

### UI/UX Features

- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Modern UI Components** - Clean, professional interface with smooth animations
- **Bottom Navigation** - Easy access to key features on mobile devices
- **Fast Performance** - Optimized with Vite for lightning-fast development and builds

## Tech Stack

### Frontend Framework

- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **React Router DOM 6.22.0** - Client-side routing and navigation

### Build Tools

- **Vite 6.0.3** - Next-generation frontend tooling
- **@vitejs/plugin-react 4.3.4** - React Fast Refresh support

### Styling and Icons

- **CSS Modules** - Scoped styling for components
- **React Icons 5.0.1** - Comprehensive icon library

### State Management

- **React Context API** - Theme management and global state

## Project Structure

```
L & T/
├── src/                             # Source code directory
│   ├── components/                  # Reusable UI components
│   │   ├── common/                  # Common/shared components
│   │   │   ├── Button.jsx           # Custom button component
│   │   │   └── Button.css           # Button styles
│   │   └── layout/                  # Layout components
│   │       ├── Header.jsx           # Header with theme toggle
│   │       ├── Header.css           # Header styles
│   │       ├── BottomNav.jsx        # Mobile bottom navigation
│   │       └── BottomNav.css        # Bottom nav styles
│   │
│   ├── context/                     # React Context providers
│   │   └── ThemeContext.jsx        # Theme state management
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── ProjectDashboard.jsx    # Main project overview
│   │   ├── ProjectDashboard.css    # Dashboard styles
│   │   ├── AIChat.jsx              # AI assistant interface
│   │   ├── AIChat.css              # Chat styles
│   │   ├── SpecificationReview.jsx # Document review page
│   │   ├── SpecificationReview.css # Review page styles
│   │   ├── RiskAnalysis.jsx        # Risk assessment page
│   │   ├── RiskAnalysis.css        # Risk page styles
│   │   ├── VendorManagement.jsx    # Vendor management page
│   │   ├── VendorManagement.css    # Vendor page styles
│   │   ├── Settings.jsx            # Settings page
│   │   └── Settings.css            # Settings styles
│   │
│   ├── hooks/                       # Custom React hooks (future)
│   ├── utils/                       # Utility functions (future)
│   ├── assets/                      # Static assets (images, fonts)
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global styles and CSS variables
│
├── public/                          # Public static assets
├── node_modules/                    # Dependencies (gitignored)
│
├── index.html                       # HTML entry point
├── package.json                     # Project dependencies and scripts
├── package-lock.json                # Dependency lock file
├── vite.config.js                   # Vite configuration
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

### Component Architecture

```
App (Router)
├── ThemeProvider (Context)
│   ├── Router
│   │   ├── ProjectDashboard
│   │   │   └── Header
│   │   ├── SpecificationReview
│   │   │   └── Header
│   │   ├── RiskAnalysis
│   │   │   └── Header
│   │   ├── VendorManagement
│   │   │   └── Header
│   │   ├── Settings
│   │   │   └── Header
│   │   └── AIChat
│   │       └── Header
│   └── BottomNav (Global)
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

### System Requirements

- **OS**: Windows 10/11, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: 500MB for dependencies

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shrinjayshresth1/EPC-Reasoning-Engine.git
   cd "L & T"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npm list --depth=0
   ```

## Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:

- **Local**: http://localhost:5173
- **Network**: Use the URL shown in terminal for network access

**Note**: If port 5173 is in use, Vite will automatically use the next available port.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Script      | Command           | Description                       |
| ----------- | ----------------- | --------------------------------- |
| **dev**     | `npm run dev`     | Start development server with HMR |
| **build**   | `npm run build`   | Create optimized production build |
| **preview** | `npm run preview` | Preview production build locally  |

## Environment Configuration

### CSS Variables (Theme System)

The application uses CSS custom properties for theming. All theme variables are defined in `src/index.css`:

#### Dark Theme (Default)

```css
--color-bg-primary: #000000 --color-bg-secondary: #0a0a0a
  --color-text-primary: #ffffff --color-accent-green: #00ff88;
```

#### Light Theme

```css
--color-bg-primary: #ffffff --color-bg-secondary: #f5f5f7
  --color-text-primary: #1d1d1f;
```

### LocalStorage Keys

| Key     | Purpose                      | Type                |
| ------- | ---------------------------- | ------------------- |
| `theme` | Stores user theme preference | `'dark' \| 'light'` |

## Theme System

### Features

- **Persistent Theme** - User preference saved to localStorage
- **System Integration** - Respects user OS theme preference
- **Smooth Transitions** - Animated theme switching
- **Global Access** - Theme state available via Context API

### Usage in Components

```javascript
import { useTheme } from "../context/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
}
```

## Development Guidelines

### Code Style

- Use **functional components** with hooks
- Follow **ESLint** rules (when configured)
- Use **CSS Modules** or scoped styles
- Keep components **small and focused**

### File Naming Conventions

- **Components**: PascalCase (e.g., `ProjectDashboard.jsx`)
- **Styles**: Match component name (e.g., `ProjectDashboard.css`)
- **Utilities**: camelCase (e.g., `formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

### Component Structure

```javascript
// 1. Imports
import { useState } from "react";
import "./Component.css";

// 2. Component definition
const Component = ({ props }) => {
  // 3. Hooks
  const [state, setState] = useState();

  // 4. Handlers
  const handleClick = () => {};

  // 5. Effects
  useEffect(() => {}, []);

  // 6. Render
  return <div>Component</div>;
};

// 7. Export
export default Component;
```

## Troubleshooting

### Common Issues

**Issue**: `npm run dev` fails with path errors

- **Solution**: Use quotes around the directory path: `cd "C:\Users\RAJNEESH VERMA\Desktop\L & T"`

**Issue**: Port 5173 already in use

- **Solution**: Vite will automatically use next available port, or kill the process using port 5173

**Issue**: Module not found errors

- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Theme not persisting

- **Solution**: Check browser localStorage is enabled and not blocked

## Contributing

Contributions are welcome. Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Ensure all tests pass before submitting PR

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+
- **Bundle Size**: < 200KB (gzipped)

## Security

- No sensitive data in client-side code
- Environment variables for API keys
- Content Security Policy headers
- Regular dependency updates

## Support

For support, please:

- Open an issue on GitHub
- Contact the development team
- Check the documentation wiki

---

Last updated: January 30, 2026
