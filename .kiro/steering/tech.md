# Technology Stack

## Build System & Framework
- **Build Tool**: Vite (using rolldown-vite@7.1.14)
- **Framework**: React 19.1.1 with React DOM
- **Language**: JavaScript (ES modules)
- **CSS Framework**: Tailwind CSS with Vite plugin

## Key Dependencies
- **Icons**: Lucide React (^0.548.0) for consistent iconography
- **Development**: ESLint with React-specific plugins for code quality

## Common Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build
npm run preview
```

## Development Guidelines
- Use ES6+ modules (`type: "module"` in package.json)
- Follow React 19 patterns with hooks
- Utilize Tailwind utility classes for styling
- Use Lucide React icons for consistency
- ESLint configuration enforces React best practices

## Project Structure
- Single-page application with component-based architecture
- All components use functional components with hooks
- Tailwind CSS for responsive, utility-first styling
- Vite for fast development and optimized builds