'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BikeImageGridProps } from '../types/types';
import LoadingSpinner from './LoadingSpinner';

export default function BikeImageGrid({ images, isLoading }: BikeImageGridProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Auto-open first image when results load
    useEffect(() => {
        if (images.length > 0 && !isLoading) {
            setSelectedImage(images[0].link);
        }
    }, [images, isLoading]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (images.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                    <svg
                        className="w-20 h-20 mx-auto mb-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-300 mb-2">No bikes found</h3>
                    <p className="text-gray-400">Try searching for different bike models or brands</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-[fadeIn_0.8s_ease-in]">
                {images.map((bike, index) => (
                    <div
                        key={index}
                        className="glass rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                        onClick={() => setSelectedImage(bike.link)}
                        style={{
                            animationDelay: `${index * 0.05}s`,
                            animation: 'slideUp 0.5s ease-out forwards',
                            opacity: 0
                        }}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square overflow-hidden bg-black/20">
                            <Image
                                src={bike.thumbnailLink}
                                alt={bike.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                unoptimized
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium line-clamp-2">
                                    {bike.title}
                                </p>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-4">
                            <h3 className="text-sm font-medium text-white line-clamp-2 mb-2">
                                {bike.title}
                            </h3>
                            <p className="text-xs text-gray-400 truncate">
                                {bike.displayLink}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-in]"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
                        <Image
                            src={selectedImage}
                            alt="Full size bike image"
                            fill
                            className="object-contain"
                            unoptimized
                        />

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
