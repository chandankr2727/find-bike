'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MusicPlayerProps } from '../types/types';

export default function MusicPlayer({ audioSrc, images }: MusicPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Auto-play when search results arrive
    useEffect(() => {
        if (images && images.length > 0 && !isPlaying && audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.log('Autoplay prevented by browser. User can manually start music.', error);
                });
        }
    }, [images]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <div className="glass-strong rounded-2xl p-4 shadow-2xl min-w-[200px]">
                <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all duration-200"
                        aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    >
                        {isPlaying ? (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    {/* Volume Control */}
                    <div className="flex-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-accent-cyan"
                        />
                    </div>
                </div>

                {/* Now Playing Indicator */}
                {isPlaying && (
                    <div className="mt-3 flex items-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-gradient-to-t from-accent-cyan to-accent-purple rounded-full animate-pulse"
                                    style={{
                                        height: '12px',
                                        animationDelay: `${i * 0.15}s`,
                                        animationDuration: '0.8s'
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-400">Now Playing</span>
                    </div>
                )}
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} loop>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
