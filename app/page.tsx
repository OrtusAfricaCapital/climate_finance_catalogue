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
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Side - Title and Description */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                Discover Climate Finance Opportunities
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Explore a comprehensive catalogue of climate finance
                institutions, facilities, and opportunities available to the
                private sector in Uganda. Find the right partner for your green
                investment needs.
              </p>
            </div>

            {/* Right Side - Search and Filter */}
            <div className="w-full lg:w-1/2">
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
        {(searchQuery || focusAreaFilter) && (
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
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {filteredInstitutions.length}
            </div>
            <div className="text-gray-600">Institutions</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Operational</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Access</div>
          </div>
        </div>

        {/* Institutions Grid */}
        {filteredInstitutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>
              &copy; 2024 Uganda Climate Finance Catalogue. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Data sourced from the Uganda Climate Finance Responses database
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
