"use client";

import { useState, useEffect } from "react";
import { institutions } from "./data/institutions";
import InstitutionCard from "./components/InstitutionCard";
import SearchFilter from "./components/SearchFilter";
import { applySearchAndFilter, getUniqueFocusAreas } from "./utils/filterUtils";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [focusAreaFilter, setFocusAreaFilter] = useState("");
  const [filteredInstitutions, setFilteredInstitutions] =
    useState(institutions);
  const [uniqueFocusAreas] = useState(getUniqueFocusAreas(institutions));

  // Apply search and filter whenever they change
  useEffect(() => {
    const results = applySearchAndFilter(
      institutions,
      searchQuery,
      focusAreaFilter
    );
    setFilteredInstitutions(results);
  }, [searchQuery, focusAreaFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (focusArea: string) => {
    setFocusAreaFilter(focusArea);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setFocusAreaFilter("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Header */}
      <header className="bg-green-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center h-24 py-4">
            <h1 className="text-3xl font-bold text-white mb-2">
              Uganda Climate Finance Catalogue
            </h1>
            <p className="text-orange-100 text-lg font-medium">
              Connecting the Private Sector to Climate Finance Opportunities in
              Uganda
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section with Search */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-md p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left: Icon + Text */}
            <div className="flex-1 flex items-start gap-4">
              {/* Icon */}
              <div className="hidden md:block">
                <svg
                  className="w-16 h-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <circle cx="24" cy="24" r="22" strokeWidth="3" />
                  <path d="M16 32c2-8 14-8 16 0" strokeWidth="3" />
                  <circle cx="24" cy="20" r="4" fill="currentColor" />
                </svg>
              </div>
              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                  Discover{" "}
                  <span className="text-green-600">Climate Finance</span>{" "}
                  Opportunities
                </h2>
                <p className="text-lg text-gray-600">
                  Explore a comprehensive catalogue of climate finance
                  institutions, facilities, and opportunities available to the
                  private sector in Uganda. Find the right partner for your
                  green investment needs.
                </p>
              </div>
            </div>
            {/* Right: Search/Filter */}
            <div className="w-full md:w-[420px] bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-green-100">
              <SearchFilter
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                focusAreas={uniqueFocusAreas}
                currentFilter={focusAreaFilter}
              />
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
            <svg
              className="w-4 h-4 mr-2"
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
            <span className="font-medium">
              {filteredInstitutions.length} institution
              {filteredInstitutions.length !== 1 ? "s" : ""} found
              {searchQuery && ` for "${searchQuery}"`}
              {focusAreaFilter && ` in ${focusAreaFilter}`}
            </span>
            {(searchQuery || focusAreaFilter) && (
              <button
                onClick={handleClearAll}
                className="ml-3 text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Clear all
              </button>
            )}
          </div>
          {/* Debug info */}
          <div className="mt-2 text-sm text-gray-500">
            Search query: &quot;{searchQuery}&quot; | Total institutions:{" "}
            {institutions.length} | Filtered: {filteredInstitutions.length}
          </div>
        </div>

        {/* Institutions Grid */}
        {filteredInstitutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredInstitutions.map((institution) => (
              <InstitutionCard key={institution.id} institution={institution} />
            ))}
          </div>
        ) : (
          /* No Results Message */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No institutions found
              </h3>
              <p className="text-gray-600 mb-4">
                No institutions match your search criteria. Try adjusting your
                search terms or filters.
              </p>
              <button
                onClick={handleClearAll}
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Bottom Search and Filter */}
        {filteredInstitutions.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need to refine your search?
              </h3>
              <p className="text-gray-600">
                Use the search and filter options below to find exactly what
                you&apos;re looking for.
              </p>
            </div>
            <SearchFilter
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
              focusAreas={uniqueFocusAreas}
              currentFilter={focusAreaFilter}
            />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-10 pb-8 bg-gradient-to-r from-green-50 to-blue-50 border-t border-green-200">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* Left: Logo/Icon and Text */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div>
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 40 40"
                >
                  <circle cx="20" cy="20" r="18" strokeWidth="2" />
                  <path d="M13 28c2-8 12-8 14 0" strokeWidth="2" />
                  <circle cx="20" cy="16" r="3" fill="currentColor" />
                </svg>
              </div>
              <p className="text-gray-700 font-semibold text-center md:text-left">
                &copy; 2024 Uganda Climate Finance Catalogue
              </p>
              <p className="text-sm text-gray-500 text-center md:text-left">
                Data sourced from the Uganda Climate Finance Responses database
              </p>
            </div>
            {/* Right: Social Links or Quick Links (optional) */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-green-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
