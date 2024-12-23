# Zentry Gaming Platform

A modern gaming platform that combines Web2 and Web3 gaming experiences with immersive animations and interactive user interfaces.

## 🌟 Features

- **Hero Section**: Dynamic video transitions with interactive hover effects
- **Features Showcase**: Interactive Bento grid layout with tilt animations
- **Contact Section**: Image clipping masks with parallax effects
- **Story Section**: Floating image with 3D transform animations
- **Responsive Design**: Fully responsive across all device sizes

## 🚀 Tech Stack

- React 18+
- TypeScript
- GSAP (GreenSock Animation Platform)
- TailwindCSS
- Clsx for conditional class names
- React Icons

## 📦 Dependencies

```json
{
  "dependencies": {
    "@gsap/react": "^2.0.0",
    "clsx": "^2.0.0",
    "gsap": "^3.12.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0"
  }
}
```

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/zentry-gaming.git
```

2. Install dependencies:

```bash
cd zentry-gaming
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AnimatedTitle.tsx
│   ├── BentoTilt.tsx
│   ├── Button.tsx
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── FloatingImage.tsx
│   ├── Hero.tsx
│   └── VideoPreview.tsx
├── assets/
│   ├── videos/
│   │   └── feature-*.mp4
│   └── img/
│       ├── contact-*.webp
│       └── entrance.webp
└── styles/
    └── globals.css
```

## 🎨 Components

### Hero Component

The main landing section featuring:

- Dynamic video transitions
- Interactive preview window
- Animated title with custom font
- Responsive layout

### Features Component

Showcases platform features using:

- Bento grid layout
- Tilt animations on hover
- Video backgrounds
- Coming soon indicators

### Contact Component

Contact section with:

- Image clipping masks
- Dynamic text animations
- Custom button animations
- Responsive grid layout

### FloatingImage Component

Story section featuring:

- 3D transform animations
- Mouse movement tracking
- GSAP-powered animations
- SVG filters for visual effects

## 🎮 Usage

### BentoTilt Component

```tsx
<BentoTilt className="custom-class">
  <BentoCard
    src="/path/to/video.mp4"
    title={
      <>
        Your Title with <b>emphasis</b>
      </>
    }
    description="Your description"
    isComingSoon
  />
</BentoTilt>
```

### AnimatedTitle Component

```tsx
<AnimatedTitle
  title="Your Title with <b>emphasis</b>"
  containerClass="your-custom-class"
/>
```

### Button Component

```tsx
<Button
  id="unique-id"
  title="Button Text"
  leftIcon={<Icon />}
  containerClass="custom-class"
/>
```

## 🎯 Custom Styles

The project uses custom CSS classes for specific effects:

- `.special-font`: Custom font for headings
- `.border-hsla`: Custom border with HSLA colors
- `.bento-title`: Specific styling for bento grid titles
- `.story-img-container`: Container for story section images
- `.mask-clip-path`: Custom clipping paths for images

## 🔧 Development

### CSS Guidelines

- Use TailwindCSS utilities when possible
- Custom classes should be prefixed with component name
- Maintain responsive design principles

### Animation Guidelines

- Use GSAP for complex animations
- Keep animations performant
- Provide fallbacks for reduced motion preferences

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
