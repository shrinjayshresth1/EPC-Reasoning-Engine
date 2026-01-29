# EPC Management System

A modern, feature-rich Engineering, Procurement, and Construction (EPC) management application built with React and Vite. This system provides comprehensive project management capabilities with AI-powered insights, risk analysis, vendor management, and real-time collaboration features.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-6.0.3-646CFF.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features

### Core Functionality

- **Project Dashboard** - Comprehensive overview of project metrics, budgets, and milestones
- **AI-Powered Chat** - Intelligent assistant for project insights and recommendations
- **Specification Review** - Document management and review system
- **Risk Analysis** - Real-time risk assessment and monitoring
- **Vendor Management** - Streamlined vendor onboarding and management
- **Settings & Configuration** - Customizable user preferences

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

### Styling & Icons

- **CSS Modules** - Scoped styling for components
- **React Icons 5.0.1** - Comprehensive icon library

### State Management

- **React Context API** - Theme management and global state

## Project Structure

```
EPC-Reasoning-Engine/
├── src/                          # Source code directory
│   ├── components/               # Reusable UI components
│   │   ├── common/              # Common/shared components
│   │   │   ├── Button.jsx          # Custom button component
│   │   │   └── Button.css          # Button styles
│   │   └── layout/              # Layout components
│   │       ├── Header.jsx          # Header with theme toggle
│   │       ├── Header.css          # Header styles
│   │       ├── BottomNav.jsx       # Mobile bottom navigation
│   │       └── BottomNav.css       # Bottom nav styles
│   │
│   ├── context/                 # React Context providers
│   │   └── ThemeContext.jsx       # Theme state management
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── ProjectDashboard.jsx   # Main project overview
│   │   ├── ProjectDashboard.css   # Dashboard styles
│   │   ├── AIChat.jsx             # AI assistant interface
│   │   ├── AIChat.css             # Chat styles
│   │   ├── SpecificationReview.jsx # Document review page
│   │   ├── SpecificationReview.css # Review page styles
│   │   ├── RiskAnalysis.jsx       # Risk assessment page
│   │   ├── RiskAnalysis.css       # Risk page styles
│   │   ├── VendorManagement.jsx   # Vendor management page
│   │   ├── VendorManagement.css   # Vendor page styles
│   │   ├── Settings.jsx           # Settings page
│   │   └── Settings.css           # Settings styles
│   │
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Utility functions
│   ├── assets/                  # Static assets (images, fonts)
│   │
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles & CSS variables
│
├── public/                       # Public static assets
├── node_modules/                 # Dependencies (gitignored)
│
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies & scripts
├── package-lock.json             # Dependency lock file
├── vite.config.js               # Vite configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # Project documentation
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

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shrinjayshresth1/EPC-Reasoning-Engine.git
   cd EPC-Reasoning-Engine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn install
   ```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173

### Production Build

Create an optimized production build:

```bash
npm run build
```

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

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
