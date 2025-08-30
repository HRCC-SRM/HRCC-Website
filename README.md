# HRDC Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS.

## Features

- **Loading Animation**: Smooth video-based loading screen with particle effects
- Responsive design
- Modern UI components
- Optimized performance

## Loading Animation

The website features a sophisticated loading animation that:

- **Video Background**: Uses `hero-1.mp4` as a background video during loading
- **Particle Effects**: Displays floating particles for visual appeal
- **Smooth Transitions**: Fades in content and smoothly transitions to the main website
- **Progress Indicator**: Shows loading progress with an animated progress bar
- **Fallback Support**: Gracefully handles video loading errors with gradient backgrounds
- **Branded Experience**: Features the HRDC logo and branding during loading

### Loading Sequence

1. **Initial Load**: Loading screen appears with video background
2. **Content Fade In**: Logo, text, and spinner animate in smoothly
3. **Progress Tracking**: Progress bar fills as video loads
4. **Smooth Transition**: Loading screen fades out over 1 second
5. **Website Reveal**: Main website content fades in smoothly

### Technical Details

- **Duration**: Minimum 3.5 seconds for optimal user experience
- **Transitions**: CSS-based animations with cubic-bezier easing
- **Performance**: Optimized with `will-change` properties and efficient animations
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Custom CSS animations
