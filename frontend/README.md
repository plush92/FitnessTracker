# Fitness Tracker Frontend

A React TypeScript frontend for the Fitness Tracker application.

## Features

- 📊 Daily nutrition analytics dashboard
- 🎯 Real-time data from FastAPI backend
- 📱 Responsive design
- 🎨 Modern UI with gradient cards
- ⚡ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- FastAPI backend running on `http://localhost:8000`

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend connects to the FastAPI backend at:
- Base URL: `http://localhost:8000`
- Endpoint: `/analytics/daily-totals`

Make sure your backend is running before starting the frontend.

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # React entry point
└── index.css        # Global styles
```