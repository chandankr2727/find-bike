'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BikeImageGrid from './components/BikeImageGrid';
import MusicPlayer from './components/MusicPlayer';
import { BikeImage, SearchAPIResponse } from './types/types';

export default function Home() {
  const [images, setImages] = useState<BikeImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data: SearchAPIResponse = await response.json();

      if (data.success && data.images) {
        setImages(data.images);
      } else {
        setError(data.error || 'Failed to fetch bike images');
        setImages([]);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      setImages([]);
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
            Bike Finder
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover your perfect ride. Search for any bike and explore stunning images from around the web.
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Error Message */}
        {error && (
          <div className="glass-strong border-red-500/50 rounded-xl p-6 mb-8 text-center max-w-2xl mx-auto animate-[fadeIn_0.5s_ease-in]">
            <div className="flex items-center justify-center gap-3 text-red-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Results Grid */}
        {hasSearched && (
          <BikeImageGrid images={images} isLoading={isLoading} />
        )}

        {/* Initial State - Show when no search has been made */}
        {!hasSearched && !isLoading && (
          <div className="text-center py-20 animate-[fadeIn_1s_ease-in]">
            <div className="glass rounded-3xl p-16 max-w-2xl mx-auto">
              <div className="mb-8">
                <svg
                  className="w-32 h-32 mx-auto text-accent-cyan opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zM8.5 7.5l2.5 4M16 11l-2.5-4m-1.5 0h-3m3 0l1.5 2.5M9 11h6"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-300 mb-4">
                Ready to Find Your Dream Bike?
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Enter a bike name, brand, or model above to get started
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Harley Davidson', 'Ducati', 'Yamaha R1', 'Royal Enfield', 'Kawasaki Ninja'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 glass-strong rounded-full text-sm text-gray-300 hover:text-white hover:border-accent-cyan transition-all duration-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Music Player */}
      <MusicPlayer audioSrc="/background-music.mp3" images={images} />

      {/* Footer */}
      <footer className="text-center mt-20 pb-8">
        <p className="text-gray-500 text-sm">
          Powered by SerpAPI
        </p>
      </footer>
    </div>
  );
}

