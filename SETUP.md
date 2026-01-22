# Setup Instructions

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Download Background Music

The app requires a background music file named `background-music.mp3` in the `public` folder.

### Option 1: Use the Downloaded File (Recommended)
I've downloaded "Cyberpunk City" by Alejandro Magaña from Mixkit. Check your Downloads folder for:
- `mixkit-cyberpunk-city-846.mp3`

Move it to the public folder and rename it:
```bash
Move-Item "$env:USERPROFILE\Downloads\mixkit-cyberpunk-city-846.mp3" "c:\Chandan Remote\qr-Bike\find-bike\public\background-music.mp3"
```

### Option 2: Download Your Own
Visit one of these sites for royalty-free music:
- [Mixkit](https://mixkit.co/free-stock-music/ambient/)
- [Chosic](https://www.chosic.com/free-music/lofi/)
- [Uppbeat](https://uppbeat.io/browse/sfx/ambient)

Download any ambient/lofi track and save it as `public/background-music.mp3`

## Step 3: Set Up Google Custom Search API

### A. Get Google API Key
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Go to **"APIs & Services" → "Library"**
4. Search for **"Custom Search API"** and click **Enable**
5. Go to **"Credentials" → "Create Credentials" → "API Key"**
6. Copy your API key

### B. Create Custom Search Engine
1. Visit [Programmable Search Engine](https://programmablesearchengine.google.com/)
2. Click **"Add"** to create a new search engine
3. Choose **"Search the entire web"**
4. Click **"Create"**
5. Go to **"Edit search engine" → "Setup"**
6. Enable **"Image search"** toggle
7. Copy your **Search Engine ID** (looks like: `a1b2c3d4e5f6g7h8i`)

### C. Configure Environment Variables
1. Copy the example file:
   ```bash
   copy .env.local.example .env.local
   ```

2. Open `.env.local` and add your credentials:
   ```env
   GOOGLE_API_KEY=AIzaSyA...your_actual_key_here
   GOOGLE_SEARCH_ENGINE_ID=a1b2c3d4e...your_actual_id_here
   ```

## Step 4: Run the Development Server
```bash
npm run dev
```

## Step 5: Open the App
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Testing the App
1. Try searching for: "Harley Davidson", "Ducati", "Yamaha R1"
2. Click any suggestion button on the homepage
3. Verify images load correctly
4. Click the music player button to test audio
5. Click any bike image for full-size view

## Troubleshooting

### "API configuration missing" error
- Ensure `.env.local` exists in the project root
- Verify both environment variables are set correctly
- Restart the dev server: Stop (Ctrl+C) and run `npm run dev` again

### No images appearing
- Check [Google Cloud Console](https://console.cloud.google.com/) quotas
- Verify Custom Search Engine has "Image search" enabled
- Check browser console (F12) for error messages

### Music not playing
- Ensure `background-music.mp3` exists in the `public` folder
- Click the play button (some browsers block autoplay)
- Check browser console for audio errors

---

Need help? Check the main README.md file for more detailed information.
