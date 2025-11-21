# DevFest Bhopal 2025 - Poster Creator

A modern, interactive web application for creating personalized DevFest Bhopal 2025 posters with custom photos.

![DevFest Bhopal 2025 Poster Creator](https://via.placeholder.com/800x400?text=DevFest+Bhopal+2025)

## Features

🎨 **Custom Poster Generation**
- Professional poster templates featuring Google technologies
- Square or circular frame options for user photos
- Real-time preview of the final poster
- Two unique poster designs with tech elements

📷 **Multiple Photo Input Methods**
- Camera capture with live preview
- File upload with photo editor
- Drag, resize, and reposition uploaded images

🚀 **Google Tech Elements**
- Flutter, Firebase, Android, TensorFlow icons
- Google Cloud, Chrome, Material Design symbols
- Official Google brand colors throughout

📱 **Mobile Responsive**
- Optimized for all screen sizes
- Touch-friendly interface
- Progressive Web App ready

💾 **Sharing & Download**
- High-quality PNG download
- Native sharing API support
- Social media optimized output
- Pre-written captions for Instagram, LinkedIn, and Twitter

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** for components
- **HTML5 Canvas** for poster generation
- **Web APIs** for camera and sharing

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ethicaladitya/devfest-bhopal-2025-poster.git
cd devfest-bhopal-2025-poster
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment Options

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ethicaladitya/devfest-bhopal-2025-poster)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ethicaladitya/devfest-bhopal-2025-poster)

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to any static hosting service:
   - GitHub Pages
   - Cloudflare Pages
   - Firebase Hosting
   - AWS S3 + CloudFront

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── CameraCapture.tsx
│   ├── PhotoEditor.tsx
│   └── PosterPreview.tsx
├── hooks/              # Custom React hooks
│   └── usePosterGenerator.ts
├── pages/              # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/                # Utilities
└── assets/             # Static assets
```

## How to Use

1. **Choose Your Poster**: Select from two unique poster designs
2. **Select Frame Shape**: Pick between circular or square frame
3. **Add Your Photo**: Upload from your device or take a photo with your camera
4. **Generate**: Download your personalized DevFest Bhopal 2025 poster
5. **Share**: Use the provided captions to share on social media

## Event Details

- **Event**: DevFest Bhopal 2025
- **Date**: 30 November 2025
- **Organizer**: GDG Bhopal
- **Website**: [devfest.bhopal.dev](https://devfest.bhopal.dev)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Camera Features**: Requires HTTPS in production for camera access.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- GDG Bhopal for organizing DevFest Bhopal 2025
- React and Vite communities for excellent tooling
- Google Developer Groups community

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/ethicaladitya/devfest-bhopal-2025-poster/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

Made with ❤️ for DevFest Bhopal 2025 by the GDG Bhopal community