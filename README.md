# Bike Finder - Next.js Application

A premium bike search application built with Next.js 16, TypeScript, and Tailwind CSS v4. Search for bikes using Google Custom Search API and enjoy a stunning dark theme with glassmorphism effects and ambient background music.

## ✨ Features

- 🔍 **Real-time Bike Search** - Search any bike brand, model, or name
- 🎨 **Premium Dark Theme** - Obsidian background with glassmorphism effects
- 🎵 **Background Music** - Ambient music player with volume control
- 📱 **Fully Responsive** - Mobile-first design with fluid layouts
- ⚡ **Modern Stack** - Next.js 16, TypeScript, Tailwind CSS v4
- 🔒 **Secure API** - Server-side API key protection
- 🎭 **Smooth Animations** - Fade-ins, slide-ups, and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- Google Cloud account (for API credentials)

### Installation

1. **Clone the repository**
   ```bash
   cd c:\Chandan Remote\qr-Bike\find-bike
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google Custom Search API**

   a. **Get Google API Key:**
      - Visit [Google Cloud Console](https://console.cloud.google.com/)
      - Create a new project or select existing one
      - Go to "APIs & Services" → "Library"
      - Search for "Custom Search API" and enable it
      - Go to "Credentials" → "Create Credentials" → "API Key"
      - Copy your API key

   b. **Create Custom Search Engine:**
      - Visit [Programmable Search Engine](https://programmablesearchengine.google.com/)
      - Click "Add" to create a new search engine
      - Set "Search the entire web" option
      - Enable "Image search" in settings
      - Copy your Search Engine ID

4. **Configure environment variables**
   ```bash
   # Copy the example file
   cp .env.local.example .env.local
   
   # Edit .env.local and add your credentials:
   # GOOGLE_API_KEY=your_actual_api_key_here
   # GOOGLE_SEARCH_ENGINE_ID=your_actual_search_engine_id_here
   ```

5. **Add background music**
   - Download a royalty-free ambient music MP3 file
   - Rename it to `background-music.mp3`
   - Place it in the `public` folder

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start searching for bikes!

## 🎯 Usage

1. Enter a bike name, brand, or model in the search bar
2. Press Enter or click the Search button  
3. The app automatically adds "bike" to your search query
4. Browse the image results in a beautiful grid layout
5. Click any image for full-size view
6. Control background music with the floating player

### Quick Search Suggestions
- Harley Davidson
- Ducati
- Yamaha R1
- Royal Enfield
- Kawasaki Ninja

## 🏗️ Project Structure

```
find-bike/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts          # Google Search API endpoint
│   ├── components/
│   │   ├── BikeImageGrid.tsx     # Image grid with modal
│   │   ├── LoadingSpinner.tsx    # Loading animation
│   │   ├── MusicPlayer.tsx       # Background music player
│   │   └── SearchBar.tsx         # Search input component
│   ├── types/
│   │   └── types.ts              # TypeScript interfaces
│   ├── globals.css               # Premium dark theme styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── public/
│   └── background-music.mp3      # Ambient background music
├── .env.local.example            # Environment variables template
├── package.json
└── README.md
```

## 🎨 Design Features

### Theme
- **Dark Obsidian Background** with radial gradients
- **Glassmorphism Cards** with backdrop blur
- **Gradient Text** (Cyan to Purple)
- **Inter Font** from Google Fonts
- **Custom Animations** (fadeIn, slideUp, pulse, spin)

### Components
- **SearchBar**: Auto-focus, Enter key support, gradient button
- **BikeImageGrid**: Responsive grid, staggered animations, full-size modal
- **MusicPlayer**: Play/pause, volume control, now playing indicator
- **LoadingSpinner**: Dual-ring spinning animation

## 📦 Technologies

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Runtime**: React 19.2.3
- **API**: Google Custom Search JSON API

## 🔧 Configuration

### API Limits
- **Free Tier**: 100 searches per day
- **Paid Tier**: Up to 10,000 searches per day

### Environment Variables
```env
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id_here
```

## 🐛 Troubleshooting

### "API configuration missing" error
- Ensure `.env.local` file exists in the root directory
- Verify both `GOOGLE_API_KEY` and `GOOGLE_SEARCH_ENGINE_ID` are set
- Restart the development server after adding environment variables

### No images appearing
- Check Google Cloud Console for API quota limits
- Verify Custom Search Engine has "Image search" enabled
- Check browser console for specific error messages

### Music not playing
- Ensure `background-music.mp3` exists in the `public` folder
- Some browsers require user interaction before playing audio
- Click the play button to start music

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Music: Royalty-free tracks from [Mixkit](https://mixkit.co/)
- Icons: SVG icons (custom)
- API: Google Custom Search API

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

**Important**: Add environment variables in your Vercel project settings before deploying.

---

Built with ❤️ using Next.js and TypeScript
