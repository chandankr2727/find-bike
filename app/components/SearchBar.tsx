'use client';

import React, { useState, KeyboardEvent } from 'react';
import { SearchBarProps } from '../types/types';

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto mb-12">
            <div className="glass-strong rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20">
                <div className="flex items-center gap-4">
                    {/* Bike Icon */}
                    <div className="flex-shrink-0">
                        <svg
                            className="w-8 h-8 text-accent-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zM8.5 7.5l2.5 4M16 11l-2.5-4m-1.5 0h-3m3 0l1.5 2.5M9 11h6"
                            />
                        </svg>
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Search for your dream bike..."
                        disabled={isLoading}
                        className="flex-1 bg-transparent text-white text-lg placeholder-gray-400 outline-none disabled:opacity-50"
                        autoFocus
                    />

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        disabled={isLoading || !query.trim()}
                        className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Searching...
                            </span>
                        ) : (
                            'Search'
                        )}
                    </button>
                </div>

                {/* Hint Text */}
                <p className="text-sm text-gray-400 mt-4 text-center">
                    <span className="gradient-text font-medium">&quot;bike&quot;</span> will be automatically added to your search
                </p>
            </div>
        </div>
    );
}
