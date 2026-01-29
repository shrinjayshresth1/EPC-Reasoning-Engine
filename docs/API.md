# API Documentation

## Overview

This document provides detailed information about the EPC Management System's internal API structure and data flow patterns.

## Table of Contents

- [Data Flow](#data-flow)
- [State Management](#state-management)
- [Component APIs](#component-apis)
- [Context APIs](#context-apis)
- [Utility Functions](#utility-functions)

## Data Flow

### Application Architecture

```
User Interaction
      ↓
  Component
      ↓
  Event Handler
      ↓
  State Update
      ↓
  Re-render
```

### Theme Flow

```
User clicks theme toggle
      ↓
toggleTheme() called
      ↓
ThemeContext state updated
      ↓
localStorage updated
      ↓
CSS variables applied
      ↓
All components re-render
```

## State Management

### ThemeContext API

```javascript
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `'dark' \| 'light'` | Current theme value |
| `toggleTheme` | `() => void` | Function to toggle theme |

#### Example Usage

```javascript
function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`component-${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

## Component APIs

### Header Component

**Location**: `src/components/layout/Header.jsx`

#### Props

```typescript
interface HeaderProps {
  title: string;
  onBack?: () => void;
  showSearch?: boolean;
  showMenu?: boolean;
}
```

#### Usage

```javascript
import Header from './components/layout/Header';

<Header 
  title="Project Dashboard"
  showSearch={true}
  showMenu={true}
/>
```

### BottomNav Component

**Location**: `src/components/layout/BottomNav.jsx`

#### Features
- Responsive navigation bar
- Active route highlighting
- Icon-based navigation
- React Router integration

#### Navigation Items

| Route | Icon | Label |
|-------|------|-------|
| `/projects` | IoAppsOutline | Projects |
| `/search` | IoSearchOutline | Search |
| `/analyze` | IoStatsChartOutline | Analyze |
| `/vendor` | IoPeopleOutline | Vendors |
| `/settings` | IoSettingsOutline | Settings |
| `/chat` | IoChatbubbleOutline | AI Chat |

### Button Component

**Location**: `src/components/common/Button.jsx`

#### Props

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
```

#### Usage

```javascript
import Button from './components/common/Button';

<Button 
  variant="primary" 
  size="medium"
  onClick={handleClick}
>
  Click Me
</Button>
```

## Context APIs

### ThemeContext

**Location**: `src/context/ThemeContext.jsx`

#### Implementation

```javascript
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

## Routing Configuration

### Route Structure

```javascript
<Routes>
  <Route path="/" element={<Navigate to="/projects" replace />} />
  <Route path="/projects" element={<ProjectDashboard />} />
  <Route path="/search" element={<SpecificationReview />} />
  <Route path="/analyze" element={<RiskAnalysis />} />
  <Route path="/vendor" element={<VendorManagement />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/chat" element={<AIChat />} />
</Routes>
```

### Navigation Methods

```javascript
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const goToProjects = () => {
    navigate('/projects');
  };
  
  const goBack = () => {
    navigate(-1);
  };
}
```

## CSS Variables Reference

### Color Variables

#### Dark Theme
```css
--color-bg-primary: #000000
--color-bg-secondary: #0a0a0a
--color-bg-tertiary: #141414
--color-bg-card: #1a1a1a
--color-bg-elevated: #1f1f1f

--color-text-primary: #ffffff
--color-text-secondary: #a0a0a0
--color-text-tertiary: #707070
```

#### Light Theme
```css
--color-bg-primary: #ffffff
--color-bg-secondary: #f5f5f7
--color-bg-tertiary: #ebebf0
--color-bg-card: #ffffff
--color-bg-elevated: #f0f0f2

--color-text-primary: #1d1d1f
--color-text-secondary: #86868b
--color-text-tertiary: #6e6e73
```

### Accent Colors
```css
--color-accent-green: #00ff88
--color-accent-blue: #0088ff
--color-accent-red: #ff4444
--color-accent-orange: #ff8800
--color-accent-yellow: #ffcc00
```

### Spacing
```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
```

### Border Radius
```css
--radius-sm: 0.375rem   /* 6px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
```

### Transitions
```css
--transition-fast: 150ms ease-in-out
--transition-normal: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

## Utility Functions

### localStorage Helpers

```javascript
// Get item from localStorage
const getStorageItem = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

// Set item in localStorage
const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};
```

## Future API Endpoints

### Planned Backend Integration

```javascript
// Project API
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id

// Risk Analysis API
GET    /api/risks
POST   /api/risks/analyze

// Vendor API
GET    /api/vendors
POST   /api/vendors
PUT    /api/vendors/:id

// AI Chat API
POST   /api/chat/message
GET    /api/chat/history
```

## Error Handling

### Error Boundary Pattern

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## Performance Optimization

### React.memo Usage

```javascript
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Component logic
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.data.id === nextProps.data.id;
});
```

### useMemo and useCallback

```javascript
import { useMemo, useCallback } from 'react';

function Component({ data }) {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => /* expensive operation */);
  }, [data]);
  
  // Memoize callbacks
  const handleClick = useCallback((id) => {
    // Handler logic
  }, []);
}
```

---

**Note**: This API documentation will be updated as the application evolves and new features are added.
