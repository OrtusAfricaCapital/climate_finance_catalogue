"use client";

import Link from "next/link";
import { Institution } from "../data/institutions";
import { parseFocusAreas } from "../utils/focusAreasUtils";

interface InstitutionCardProps {
  institution: Institution;
}

export default function InstitutionCard({ institution }: InstitutionCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
      {/* Header with Logo and Status */}
      <div className="relative">
        {/* Logo Section */}
        <div className="h-40 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6 relative overflow-hidden">
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
              className="max-h-24 max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
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
            <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">Logo</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
            {institution.currentStatus}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Est. {institution.yearEstablished}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Institution Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-200">
          {institution.name}
        </h3>

        {/* Facility Name */}
        <p className="text-sm text-gray-500 mb-4 italic">
          {institution.facilityName}
        </p>

        {/* Focus Areas */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Focus Areas
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {(() => {
              const areas = parseFocusAreas(institution.focusAreas);
              return (
                <>
                  {areas.slice(0, 3).map((area, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium"
                    >
                      {area}
                    </span>
                  ))}
                  {areas.length > 3 && (
                    <span className="inline-block px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                      +{areas.length - 3} more
                    </span>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* Targeted Private Sector */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Targeted Sector
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {institution.targetedPrivateSector
              .split(", ")
              .slice(0, 2)
              .map((sector, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                >
                  {sector}
                </span>
              ))}
            {institution.targetedPrivateSector.split(", ").length > 2 && (
              <span className="inline-block px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                +{institution.targetedPrivateSector.split(", ").length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Financing Type */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Financing Type
          </h4>
          <p className="text-sm text-gray-700 font-medium">
            {institution.financingType}
          </p>
        </div>

        {/* Learn More Button */}
        <Link
          href={`/institution/${institution.id}`}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 transform group-hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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
