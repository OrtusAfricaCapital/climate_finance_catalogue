import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-green-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-white hover:text-orange-100 transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Catalogue
            </Link>
            <h1 className="text-lg sm:text-2xl font-bold text-white text-center flex-1 px-2">
              Privacy Policy
            </h1>
            <div className="w-20 sm:w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle
            your information.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Last updated: December 2024</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="prose prose-green max-w-none">
              <div className="space-y-8 sm:space-y-10">
                <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        1. Introduction
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        The Uganda Climate Finance Catalogue ("we," "our," or
                        "us") is committed to protecting your privacy. This
                        Privacy Policy explains how we collect, use, disclose,
                        and safeguard your information when you visit our
                        website and use our services. This policy applies to all
                        users of the Uganda Climate Finance Catalogue platform.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        2. Information We Collect
                      </h2>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-100">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            2.1 Information You Provide
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                            We may collect information that you voluntarily
                            provide when you:
                          </p>
                          <ul className="space-y-2">
                            {[
                              "Search for climate finance institutions and opportunities",
                              "Filter and sort through our catalogue",
                              "Contact us for information or support",
                              "Subscribe to our updates or newsletters",
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                              >
                                <svg
                                  className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 sm:p-6 border border-green-100">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            2.2 Automatically Collected Information
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                            When you visit our website, we automatically collect
                            certain information, including:
                          </p>
                          <ul className="space-y-2">
                            {[
                              "Device information (IP address, browser type, operating system)",
                              "Usage data (pages visited, time spent, search queries)",
                              "Cookies and similar tracking technologies",
                              "Referral sources and navigation patterns",
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                              >
                                <svg
                                  className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        3. How We Use Your Information
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        We use the collected information for the following
                        purposes:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "To provide and maintain our climate finance catalogue services",
                          "To improve and personalize your user experience",
                          "To analyze usage patterns and optimize our platform",
                          "To communicate with you about relevant climate finance opportunities",
                          "To ensure the security and integrity of our platform",
                          "To comply with legal obligations and regulatory requirements",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm sm:text-base text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        4. Information Sharing and Disclosure
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        We do not sell, trade, or otherwise transfer your
                        personal information to third parties without your
                        consent, except in the following circumstances:
                      </p>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Service Providers",
                            description:
                              "We may share information with trusted third-party service providers who assist us in operating our website and providing services",
                            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                          },
                          {
                            title: "Legal Requirements",
                            description:
                              "We may disclose information when required by law or to protect our rights and safety",
                            icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                          },
                          {
                            title: "Business Transfers",
                            description:
                              "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction",
                            icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                          },
                          {
                            title: "Aggregated Data",
                            description:
                              "We may share anonymized, aggregated data for research and analytical purposes",
                            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-100"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d={item.icon}
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-800 mb-1">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-700">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        5. Data Security
                      </h2>
                      <div className="bg-red-50 rounded-lg p-4 sm:p-6 border border-red-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          We implement appropriate technical and organizational
                          security measures to protect your information against
                          unauthorized access, alteration, disclosure, or
                          destruction. However, no method of transmission over
                          the internet or electronic storage is 100% secure, and
                          we cannot guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        6. Cookies and Tracking Technologies
                      </h2>
                      <div className="bg-indigo-50 rounded-lg p-4 sm:p-6 border border-indigo-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          We use cookies and similar tracking technologies to
                          enhance your browsing experience, analyze website
                          traffic, and understand where our visitors are coming
                          from. You can control cookie settings through your
                          browser preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-teal-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        7. Third-Party Links
                      </h2>
                      <div className="bg-teal-50 rounded-lg p-4 sm:p-6 border border-teal-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Our website may contain links to third-party websites,
                          including climate finance institutions and external
                          resources. We are not responsible for the privacy
                          practices or content of these external sites. We
                          encourage you to review their privacy policies before
                          providing any personal information.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        8. Your Rights and Choices
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        You have the following rights regarding your personal
                        information:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Access",
                            description:
                              "Request access to your personal information",
                          },
                          {
                            title: "Correction",
                            description:
                              "Request correction of inaccurate information",
                          },
                          {
                            title: "Deletion",
                            description:
                              "Request deletion of your personal information",
                          },
                          {
                            title: "Portability",
                            description:
                              "Request a copy of your data in a portable format",
                          },
                          {
                            title: "Opt-out",
                            description:
                              "Unsubscribe from communications and marketing materials",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-pink-50 rounded-lg p-4 border border-pink-100"
                          >
                            <h3 className="font-semibold text-gray-800 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-700">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        9. Children's Privacy
                      </h2>
                      <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 border border-yellow-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Our services are not intended for children under the
                          age of 13. We do not knowingly collect personal
                          information from children under 13. If you believe we
                          have collected information from a child under 13,
                          please contact us immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        10. International Data Transfers
                      </h2>
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Your information may be transferred to and processed
                          in countries other than Uganda. We ensure that
                          appropriate safeguards are in place to protect your
                          information in accordance with this Privacy Policy and
                          applicable data protection laws.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-cyan-600"
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
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        11. Changes to This Privacy Policy
                      </h2>
                      <div className="bg-cyan-50 rounded-lg p-4 sm:p-6 border border-cyan-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          We may update this Privacy Policy from time to time to
                          reflect changes in our practices or applicable laws.
                          We will notify you of any material changes by posting
                          the updated policy on our website and updating the
                          "Last updated" date.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        12. Contact Us
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or
                        our data practices, please contact us:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <div className="flex items-center gap-3 mb-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="font-semibold text-gray-800">
                              Email
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">
                            capital@ortusafrica.com
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <div className="flex items-center gap-3 mb-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="font-semibold text-gray-800">
                              Address
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Uganda Climate Finance Catalogue
                          </p>
                          <p className="text-sm text-gray-700">
                            Kampala, Uganda
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        13. Governing Law
                      </h2>
                      <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-100">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          This Privacy Policy is governed by and construed in
                          accordance with the laws of Uganda. Any disputes
                          arising from this policy will be subject to the
                          exclusive jurisdiction of the courts of Uganda.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
