# Contributing to EPC Management System

First off, thank you for considering contributing to EPC Management System! It's people like you that make this project such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be Respectful**: Treat everyone with respect and consideration
- **Be Collaborative**: Work together and help each other
- **Be Professional**: Keep discussions focused and constructive
- **Be Inclusive**: Welcome newcomers and help them get started

## Getting Started

### Prerequisites

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment:
   ```bash
   npm install
   ```
4. Create a branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Project Setup

Ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Git configured with your username and email

## Development Workflow

### 1. Pick an Issue

- Browse open issues
- Comment on the issue to claim it
- Wait for maintainer approval before starting work

### 2. Create a Branch

Branch naming conventions:

- **Feature**: `feature/add-user-authentication`
- **Bug Fix**: `fix/header-alignment-issue`
- **Documentation**: `docs/update-api-documentation`
- **Refactor**: `refactor/optimize-dashboard-component`

### 3. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed

### 4. Test Your Changes

```bash
npm run dev  # Test in development mode
npm run build  # Ensure production build works
```

### 5. Commit Your Changes

Follow our commit message guidelines (see below)

### 6. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### JavaScript/React

#### Component Structure

```javascript
// 1. Imports (external first, then internal)
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./Component.css";

// 2. Component definition
const Component = ({ title, onAction }) => {
  // 3. State and hooks
  const [data, setData] = useState([]);
  const { theme } = useTheme();

  // 4. Effects
  useEffect(() => {
    // Effect logic
  }, []);

  // 5. Event handlers
  const handleClick = (event) => {
    // Handler logic
  };

  // 6. Render helpers
  const renderItem = (item) => {
    return <div key={item.id}>{item.name}</div>;
  };

  // 7. Main render
  return (
    <div className="component">
      <h1>{title}</h1>
      {data.map(renderItem)}
    </div>
  );
};

// 8. PropTypes (when applicable)
Component.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func,
};

// 9. Default props
Component.defaultProps = {
  onAction: () => {},
};

// 10. Export
export default Component;
```

#### Naming Conventions

- **Components**: PascalCase - `UserProfile.jsx`
- **Functions**: camelCase - `getUserData()`
- **Constants**: UPPER_SNAKE_CASE - `MAX_RETRIES`
- **CSS Classes**: kebab-case - `user-profile-card`
- **Files**: Match component name - `UserProfile.jsx`, `UserProfile.css`

#### Code Style

```javascript
// ✅ Good
const userData = users.filter((user) => user.isActive);

// ❌ Bad
const userData = users.filter((user) => {
  return user.isActive;
});

// ✅ Good - Destructuring
const { name, email } = user;

// ❌ Bad
const name = user.name;
const email = user.email;

// ✅ Good - Template literals
const message = `Welcome, ${user.name}!`;

// ❌ Bad
const message = "Welcome, " + user.name + "!";
```

### CSS Standards

```css
/* Component-specific styles */
.component-name {
  /* Layout properties first */
  display: flex;
  flex-direction: column;

  /* Box model */
  padding: var(--spacing-md);
  margin: 0;

  /* Visual properties */
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-md);

  /* Typography */
  font-size: var(--font-size-base);
  color: var(--color-text-primary);

  /* Transitions */
  transition: all var(--transition-normal);
}

/* Use CSS variables for consistency */
.button {
  color: var(--color-accent-green);
  padding: var(--spacing-sm) var(--spacing-md);
}

/* Mobile-first responsive design */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    max-width: 1200px;
  }
}
```

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

#### Examples

```bash
# Feature
git commit -m "feat(dashboard): add export to PDF functionality"

# Bug fix
git commit -m "fix(header): resolve theme toggle state persistence issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactor
git commit -m "refactor(api): optimize data fetching logic"
```

#### Detailed Commit

```
feat(risk-analysis): add real-time risk scoring

- Implement WebSocket connection for live updates
- Add risk score calculation algorithm
- Update UI to display risk trends
- Add unit tests for risk calculator

Closes #123
```

## Pull Request Process

### PR Title Format

Use the same format as commit messages:

```
feat(component): add new feature
```

### PR Description Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made

- List of specific changes
- Another change
- One more change

## Testing

How has this been tested?

## Screenshots (if applicable)

Add screenshots for UI changes

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review
- [ ] I have commented complex code
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested on multiple browsers/devices
```

### Review Process

1. **Automated Checks**: Wait for CI/CD pipeline (when configured)
2. **Code Review**: At least one maintainer must approve
3. **Changes Requested**: Address feedback promptly
4. **Approval**: Once approved, maintainers will merge

### After Merge

- Delete your feature branch
- Pull the latest main/dev branch
- Close related issues

## Testing Guidelines

### Manual Testing Checklist

- [ ] Feature works in both light and dark themes
- [ ] UI is responsive on mobile, tablet, and desktop
- [ ] No console errors or warnings
- [ ] All links and buttons work correctly
- [ ] Forms validate properly
- [ ] Loading states are shown
- [ ] Error states are handled

### Browser Testing

Test on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Testing

- [ ] No memory leaks
- [ ] Fast initial load time
- [ ] Smooth animations
- [ ] Efficient re-renders

## Documentation

When adding new features:

1. Update the README.md
2. Add inline code comments for complex logic
3. Update component documentation
4. Add usage examples

## Questions?

- Open an issue with the `question` label
- Contact the maintainers
- Check existing documentation

## Recognition

Contributors will be recognized in:

- README acknowledgments
- Release notes
- Project credits

Thank you for contributing! 🎉
