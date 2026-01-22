import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="relative">
                {/* Outer spinning ring */}
                <div className="w-16 h-16 border-4 border-t-accent-cyan border-r-accent-purple border-b-transparent border-l-transparent rounded-full animate-spin"></div>

                {/* Inner pulsing circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full opacity-75 animate-pulse"></div>
            </div>
        </div>
    );
}
