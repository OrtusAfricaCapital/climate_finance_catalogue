"use client";

import Link from "next/link";
import { Institution } from "../data/institutions";
import { parseFocusAreas } from "../utils/focusAreasUtils";

interface InstitutionCardProps {
  institution: Institution;
}

export default function InstitutionCard({ institution }: InstitutionCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
      {/* Header with Logo and Status */}
      <div className="relative">
        {/* Logo Section - Made smaller */}
        <div className="h-24 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {institution.logo && institution.logo.startsWith("http") ? (
            <img
              src={institution.logo}
              alt={`${institution.name} logo`}
              className="max-h-16 max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <div
            className={`text-gray-400 text-center relative z-10 ${
              institution.logo && institution.logo.startsWith("http")
                ? "hidden"
                : ""
            }`}
          >
            <div className="w-12 h-12 mx-auto mb-1 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs">Logo</p>
          </div>
        </div>

        {/* Status Badge - Made smaller */}
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
            {institution.currentStatus}
          </span>
        </div>

        {/* Year Badge - Made smaller */}
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Est. {institution.yearEstablished}
          </span>
        </div>
      </div>

      {/* Content Section - Reduced padding */}
      <div className="p-4">
        {/* Institution Name - Smaller font */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors duration-200">
          {institution.name}
        </h3>

        {/* Facility Name - Smaller and more subtle */}
        <p className="text-xs text-gray-500 mb-3 italic">
          {institution.facilityName}
        </p>

        {/* Focus Areas - More compact */}
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Focus Areas
          </h4>
          <div className="flex flex-wrap gap-1">
            {(() => {
              const areas = parseFocusAreas(institution.focusAreas);
              return (
                <>
                  {areas.slice(0, 2).map((area, index) => (
                    <span
                      key={index}
                      className="inline-block px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded font-medium"
                    >
                      {area}
                    </span>
                  ))}
                  {areas.length > 2 && (
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-600 text-xs rounded font-medium">
                      +{areas.length - 2} more
                    </span>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* Targeted Private Sector - More compact */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Targeted Sector
          </h4>
          <div className="flex flex-wrap gap-1">
            {institution.targetedPrivateSector
              .split(", ")
              .slice(0, 1)
              .map((sector, index) => (
                <span
                  key={index}
                  className="inline-block px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded font-medium"
                >
                  {sector}
                </span>
              ))}
            {institution.targetedPrivateSector.split(", ").length > 1 && (
              <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-600 text-xs rounded font-medium">
                +{institution.targetedPrivateSector.split(", ").length - 1} more
              </span>
            )}
          </div>
        </div>

        {/* Financing Type - More compact */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Financing Type
          </h4>
          <p className="text-xs text-gray-700 font-medium line-clamp-2">
            {institution.financingType}
          </p>
        </div>

        {/* Learn More Button - Smaller */}
        <Link
          href={`/institution/${institution.id}`}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2 px-3 rounded-md text-sm text-center transition-all duration-200 transform group-hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          Learn More
          <svg
            className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
