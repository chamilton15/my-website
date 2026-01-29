# Charlie Hamilton - Personal Website

A modern, responsive personal website built with React and Vite.

## Features

- **Home Page**: Showcases work experience, education, and hobbies
- **Resume Page**: Professional resume with downloadable PDF option
- **Contact Page**: Contact form and social media links
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean & Modern UI**: Inspired by professional portfolio sites with a focus on readability

## Tech Stack

- React 18
- React Router DOM (client-side routing)
- Vite (fast build tool and dev server)
- CSS3 (custom styling)

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
my-website/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/        # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Resume.jsx
│   │   ├── Resume.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx       # Main app component with routing
│   ├── App.css
│   ├── main.jsx      # App entry point
│   └── index.css     # Global styles
├── index.html
└── package.json
```

## Deployment

This site can be deployed to various platforms:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repo and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Deploy the `dist` folder after building
