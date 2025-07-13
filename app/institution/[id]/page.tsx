import { getInstitutionById } from "../../data/institutions";
import { parseFocusAreas } from "../../utils/focusAreasUtils";
import Link from "next/link";
import { notFound } from "next/navigation";
import InstitutionLogo from "../../components/InstitutionLogo";

interface InstitutionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function InstitutionPage({
  params,
}: InstitutionPageProps) {
  // Validate that params.id exists
  const resolvedParams = await params;
  if (!resolvedParams?.id) {
    notFound();
  }

  const institution = getInstitutionById(resolvedParams.id);

  // If institution is not found, show 404
  if (!institution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-white hover:text-orange-100 transition-colors text-sm sm:text-base"
            >
              ← Back to Catalogue
            </Link>
            <h1 className="text-lg sm:text-2xl font-bold text-white text-center flex-1 px-2">
              {institution.name}
            </h1>
            <div className="w-20 sm:w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Institution Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 sm:p-6 lg:p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              {/* Logo */}
              <InstitutionLogo
                logo={institution.logo}
                institutionName={institution.name}
              />

              {/* Basic Info */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  {institution.name}
                </h1>
                <p className="text-green-100 text-base sm:text-lg mb-2">
                  {institution.facilityName}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="bg-green-700 px-2 sm:px-3 py-1 rounded-full">
                    Est. {institution.yearEstablished}
                  </span>
                  <span className="bg-green-700 px-2 sm:px-3 py-1 rounded-full">
                    {institution.currentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Overview */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Overview
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {institution.overview}
                  </p>
                </div>

                {/* Focus Areas */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Focus Areas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {parseFocusAreas(institution.focusAreas).map(
                      (area, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {area}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Targeted Private Sector */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Targeted Private Sector
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {institution.targetedPrivateSector
                      .split(", ")
                      .map((sector, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {sector}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Financing Type */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Financing Type
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    {institution.financingType}
                  </p>
                </div>

                {/* Typical Ticket Size */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Typical Ticket Size & Terms
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    {institution.typicalTicketSize}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Access Process */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Access/Application Process
                  </h2>
                  {institution.accessProcess.startsWith("http") ? (
                    <a
                      href={institution.accessProcess}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 underline text-sm sm:text-base"
                    >
                      Apply Online
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-700">
                      {institution.accessProcess}
                    </p>
                  )}
                </div>

                {/* Success Stories */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Success Stories
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    {institution.successStories}
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Contact Information
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Contact Person:
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {institution.contactPerson}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Position:
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {institution.position}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Email:
                      </span>
                      <a
                        href={`mailto:${institution.email}`}
                        className="text-green-600 hover:text-green-800 underline text-sm sm:text-base"
                      >
                        {institution.email}
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Phone:
                      </span>
                      <a
                        href={`tel:${institution.phoneNumber}`}
                        className="text-green-600 hover:text-green-800 underline text-sm sm:text-base"
                      >
                        {institution.phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Website & Resources
                  </h2>
                  {institution.website && (
                    <a
                      href={
                        institution.website.startsWith("http")
                          ? institution.website
                          : `https://${institution.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 sm:px-4 rounded-md transition-colors duration-200 text-sm sm:text-base"
                    >
                      Visit Website
                    </a>
                  )}
                </div>

                {/* Attachments */}
                {institution.attachments &&
                  institution.attachments.startsWith("http") && (
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Additional Resources
                      </h2>
                      <a
                        href={institution.attachments}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-3 sm:px-4 rounded-md transition-colors duration-200 text-sm sm:text-base"
                      >
                        View Documents
                      </a>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
