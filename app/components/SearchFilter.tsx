"use client";

import { useState, useEffect } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (focusArea: string) => void;
  focusAreas: string[];
  currentFilter: string;
}

export default function SearchFilter({
  onSearch,
  onFilterChange,
  focusAreas,
  currentFilter,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Automatic search as user types
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchQuery);
    }, 300); // Debounce search for 300ms

    return () => clearTimeout(timeoutId);
  }, [searchQuery, onSearch]);

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4">
      {/* Search Section */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or financing type..."
          className="block w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-sm sm:text-base"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Section */}
      <div>
        <label
          htmlFor="focus-area-filter"
          className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
        >
          Filter by Focus Area:
        </label>
        <select
          id="focus-area-filter"
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-sm sm:text-base"
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
  );
}
