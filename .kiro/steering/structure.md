# Project Structure

## Root Directory
```
├── src/                    # Source code
├── public/                 # Static assets
├── .kiro/                  # Kiro configuration and steering
├── .vscode/                # VS Code settings
├── node_modules/           # Dependencies
├── package.json            # Project configuration
├── vite.config.js          # Vite build configuration
├── eslint.config.js        # ESLint configuration
└── index.html              # Entry HTML file
```

## Source Structure (`src/`)
```
src/
├── components/             # Reusable React components
│   ├── BookingModal.jsx    # Booking form modal
│   ├── Logo.jsx            # Company logo component
│   └── Navbar.jsx          # Navigation component
├── assets/                 # Images and static files
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
├── index.css               # Global styles
├── App.css                 # App-specific styles
└── [page].jsx              # Page components (home, about, etc.)
```

## Component Organization
- **Page Components**: Direct files in `src/` (home.jsx, about.jsx, services.jsx, etc.)
- **Shared Components**: Located in `src/components/` directory
- **Single Page App**: All sections rendered in App.jsx as a single scrollable page

## Naming Conventions
- **Components**: PascalCase (e.g., `BookingModal.jsx`, `Navbar.jsx`)
- **Pages**: lowercase (e.g., `home.jsx`, `services.jsx`)
- **Files**: Use `.jsx` extension for React components
- **CSS**: Tailwind utility classes preferred over custom CSS

## Architecture Pattern
- **Component-based**: Each section is a separate component
- **Props-based communication**: Data flows down through props
- **Hook-based state**: useState and useEffect for component state
- **Single responsibility**: Each component handles one main concern