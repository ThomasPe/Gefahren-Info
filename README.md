# Gefahren-Info

A Progressive Web App (PWA) for searching UN numbers and hazardous material classes.

## Features

- 🔍 Fast search through UN numbers, danger numbers, material names, and hazard classes
- 📱 Progressive Web App - installable on mobile and desktop
- ⚡ Built with React, Vite, and Tailwind CSS
- 🎨 Modern UI with shadcn/ui components
- 🌐 Works offline after first load

## Development

### Prerequisites

- Node.js 20+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The app is automatically deployed to GitHub Pages on push to the `main` branch.

Visit the live app at: https://thomaspe.github.io/Gefahren-Info/

## Data

The app uses a dataset of UN numbers (UN-Nummern) containing:
- UN Number (UN-Nummer)
- Danger Number (Gefahrnummer)
- Hazard Class (Gefahrstoffklasse)
- Material Name (Bezeichnung)

## Tech Stack

- [React](https://react.dev/) - UI Library
- [Vite](https://vite.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide React](https://lucide.dev/) - Icons
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) - PWA Support

## License

MIT License - see [LICENSE](LICENSE) file for details.
