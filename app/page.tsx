"use client";

import { useState } from "react";
import { institutions } from "./data/institutions";
import InstitutionCard from "./components/InstitutionCard";
import SearchFilter from "./components/SearchFilter";
import Footer from "./components/Footer";
import { applySearchAndFilter, getUniqueFocusAreas } from "./utils/filterUtils";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [focusAreaFilter, setFocusAreaFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [uniqueFocusAreas] = useState(getUniqueFocusAreas(institutions));

  // Calculate filtered results directly without storing in state
  const filteredInstitutions = applySearchAndFilter(
    institutions,
    searchQuery,
    focusAreaFilter,
    sortBy
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (focusArea: string) => {
    setFocusAreaFilter(focusArea);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setFocusAreaFilter("");
    setSortBy("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Header */}
      <header className="bg-green-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center h-20 sm:h-24 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
              Uganda Climate Finance Catalogue
            </h1>
            <p className="text-orange-100 text-base sm:text-lg font-medium text-center px-4">
              Connecting the Private Sector to Climate Finance Opportunities in
              Uganda
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction Section with Search */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            {/* Left: Icon + Text */}
            <div className="flex-1 flex items-start gap-4">
              {/* Icon */}
              <div className="hidden md:block">
                <svg
                  className="w-12 h-12 lg:w-16 lg:h-16 text-green-500"
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
                  Discover{" "}
                  <span className="text-green-600">Climate Finance</span>{" "}
                  Opportunities
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Explore a comprehensive catalogue of climate finance
                  institutions, facilities, and opportunities available to the
                  private sector in Uganda. Find the right partner for your
                  green investment needs.
                </p>
              </div>
            </div>
            {/* Right: Search/Filter */}
            <div className="w-full lg:w-[420px] bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col gap-4 border border-green-100">
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
        <div className="mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-800 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
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
              {sortBy && ` (sorted by ${sortBy})`}
            </span>
            {(searchQuery || focusAreaFilter || sortBy) && (
              <button
                onClick={handleClearAll}
                className="ml-3 text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Institutions Grid */}
        {filteredInstitutions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredInstitutions.map((institution) => (
              <InstitutionCard key={institution.id} institution={institution} />
            ))}
          </div>
        ) : (
          /* No Results Message */
          <div className="text-center py-8 sm:py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-4"
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
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                No institutions match your search criteria. Try adjusting your
                search terms or filters.
              </p>
              <button
                onClick={handleClearAll}
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base"
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
      </main>

      {/* Footer */}
      <Footer
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        focusAreas={uniqueFocusAreas}
        currentFilter={focusAreaFilter}
        currentSort={sortBy}
        searchQuery={searchQuery}
        onClearAll={handleClearAll}
        totalInstitutions={institutions.length}
      />
    </div>
  );
}
