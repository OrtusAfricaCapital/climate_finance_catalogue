"use client";

import { useState } from "react";

interface InstitutionLogoProps {
  logo?: string;
  institutionName: string;
}

export default function InstitutionLogo({
  logo,
  institutionName,
}: InstitutionLogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-lg flex items-center justify-center p-2 sm:p-3 md:p-4">
      {logo && logo.startsWith("http") && !imageError ? (
        <img
          src={logo}
          alt={`${institutionName} logo`}
          className="max-w-full max-h-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-gray-400 text-center">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs">Logo</p>
        </div>
      )}
    </div>
  );
}
