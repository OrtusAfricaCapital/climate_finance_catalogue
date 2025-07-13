"use client";

import { useState, useEffect } from "react";

interface StickySearchProps {
  onSearch: (query: string) => void;
  onFilterChange: (focusArea: string) => void;
  focusAreas: string[];
  currentFilter: string;
  searchQuery: string;
  onClearAll: () => void;
}

export default function StickySearch({
  onSearch,
  onFilterChange,
  focusAreas,
  currentFilter,
  searchQuery,
  onClearAll,
}: StickySearchProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 400; // Show after scrolling 400px
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync local state with prop
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (value: string) => {
    setLocalSearchQuery(value);
    onSearch(value);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-50 to-blue-50 shadow-lg border-b border-green-200 transform transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: Search Info with Icon */}
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Icon */}
              <div className="hidden md:block">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="14" strokeWidth="2" />
                  <path d="M10 22c1-5 8-5 9 0" strokeWidth="2" />
                  <circle cx="16" cy="14" r="3" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Quick Search
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Refine your search as you browse
                </p>
              </div>
              {(searchQuery || currentFilter) && (
                <button
                  onClick={onClearAll}
                  className="ml-2 text-xs text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Right: Compact Search/Filter */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64 lg:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by financing type..."
                className="block w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm border border-green-200 rounded-lg leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm"
                value={localSearchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>

            {/* Filter Dropdown */}
            <div className="sm:w-48 lg:w-56">
              <select
                value={currentFilter}
                onChange={(e) => onFilterChange(e.target.value)}
                className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-green-200 rounded-lg leading-5 bg-white/80 backdrop-blur-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm"
              >
                <option value="">All Focus Areas</option>
                {focusAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
