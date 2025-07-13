"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FooterProps {
  onSearch: (query: string) => void;
  onFilterChange: (focusArea: string) => void;
  onSortChange: (sortBy: string) => void;
  focusAreas: string[];
  currentFilter: string;
  currentSort: string;
  searchQuery: string;
  onClearAll: () => void;
  totalInstitutions: number;
}

export default function Footer({
  onSearch,
  onFilterChange,
  onSortChange,
  focusAreas,
  currentFilter,
  currentSort,
  searchQuery,
  onClearAll,
  totalInstitutions,
}: FooterProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Sync local state with prop
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Automatic search as user types
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(localSearchQuery);
    }, 300); // Debounce search for 300ms

    return () => clearTimeout(timeoutId);
  }, [localSearchQuery, onSearch]);

  const handleSearchChange = (value: string) => {
    setLocalSearchQuery(value);
    onSearch(value);
  };

  return (
    <footer className="bg-gradient-to-r from-green-50 to-blue-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left: Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div className="hidden md:block">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-green-600"
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Uganda Climate Finance Catalogue
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Connecting the private sector to climate finance opportunities
                  in Uganda.
                </p>
                <div className="text-xs sm:text-sm text-gray-500">
                  <p>Total Institutions: {totalInstitutions}</p>
                  <p>Last Updated: December 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Search Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-green-100 shadow-sm">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Quick Search & Sort
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* Search Input */}
                <div className="relative sm:col-span-2 lg:col-span-1">
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
                    placeholder="Search by name or financing type..."
                    className="block w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm border border-green-200 rounded-lg leading-5 bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    value={localSearchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                </div>

                {/* Filter Dropdown */}
                <div>
                  <select
                    value={currentFilter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-green-200 rounded-lg leading-5 bg-white/90 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  >
                    <option value="">All Focus Areas</option>
                    {focusAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Dropdown */}
                <div>
                  <select
                    value={currentSort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-green-200 rounded-lg leading-5 bg-white/90 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  >
                    <option value="">Sort by...</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="year">Year Established</option>
                    <option value="year-desc">Year Established (Newest)</option>
                    <option value="financing">Financing Type</option>
                  </select>
                </div>
              </div>

              {/* Clear All Button */}
              {(searchQuery || currentFilter || currentSort) && (
                <div className="mt-3 sm:mt-4 flex justify-end">
                  <button
                    onClick={onClearAll}
                    className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-200 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-0 text-center sm:text-left">
              © 2024 Uganda Climate Finance Catalogue. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600">
              <Link
                href="/privacy-policy"
                className="hover:text-green-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-green-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
