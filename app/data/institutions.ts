export interface Institution {
  id: string;
  name: string;
  facilityName: string;
  yearEstablished: string;
  currentStatus: string;
  logo: string;
  overview: string;
  focusAreas: string;
  targetedPrivateSector: string;
  financingType: string;
  typicalTicketSize: string;
  accessProcess: string;
  successStories: string;
  website: string;
  contactPerson: string;
  position: string;
  email: string;
  phoneNumber: string;
  attachments: string;
}

export const institutions: Institution[] = [
  {
    id: "ortus-africa-capital",
    name: "Ortus Africa Capital",
    facilityName: "Climate Finance TA Window",
    yearEstablished: "2025",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1xJcFHat7ovY4t24uHH5G0csG70MfKvYL",
    overview:
      "Technical assistance and preparation of projects seeking climate finance in line with Uganda's Climate Change Act",
    focusAreas: "Renewable Energy, Climate-smart Agriculture",
    targetedPrivateSector: "SMEs, Large Corporates",
    financingType: "Technical Assistance",
    typicalTicketSize:
      "Upto $10,000 in technical assistance support including scoping of eligbility for climate finance, advising on the process and path to achieve climate finance, target long/short list of financiers",
    accessProcess:
      "https://www.ortusafricacapital.com/forms/capital-or-advisory-need",
    successStories: "Bantu Energy Panyimur Panyigoro Geothermal Project",
    website: "https://www.ortusafricacapital.com/",
    contactPerson: "Kenneth Legesi",
    position: "CEO/Chief Investment Officer",
    email: "capital@ortusafrica.com",
    phoneNumber: "00256756391921",
    attachments:
      "https://drive.google.com/open?id=1kPCcReh70T6qviphFnLoX5VMCwWISB3t",
  },
  {
    id: "uganda-development-bank",
    name: "Uganda Development Bank",
    facilityName: "Climate Finance Facility",
    yearEstablished: "2023",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1MH3M64QOHVaZjmgq9u-QibTvjk_iwK6L",
    overview:
      "Mobilizes capital for climate-smart investments through concessional loans, grants, and blended finance.",
    focusAreas: "Renewable Energy, Green Buildings, Climate-smart Agriculture",
    targetedPrivateSector: "SMEs, Large Corporates, Individuals",
    financingType: "Concessional Loans, Grants, Equity",
    typicalTicketSize: "Variable, based on financing program",
    accessProcess:
      "Businesses apply through UDB's structured financing programs",
    successStories:
      "Funded multiple green projects supporting Uganda's emission reduction targets",
    website: "udbl.co.ug",
    contactPerson: "Client Relations, UDB",
    position: "Client Relations, UDB",
    email: "clientrelations@udbl.co.ug",
    phoneNumber: "+256 312 355 500",
    attachments:
      "https://drive.google.com/open?id=1SQqjpp9NEt-uMv0PguAYlM8HlvnK2lWq",
  },
  {
    id: "uganda-green-enterprise-finance-accelerator",
    name: "Uganda Green Enterprise Finance Accelerator",
    facilityName: "Climate Finance",
    yearEstablished: "2020",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1zPIvYthhV0gxzOL2uw4SoT877sBw9ktZ",
    overview:
      "Facilitates tailored loans and direct acceleration support for green enterprises",
    focusAreas: "Renewable Energy, Green Buildings, Clean Energy",
    targetedPrivateSector: "SMEs, Startups",
    financingType: "Concessional Loans, Technical Assistance",
    typicalTicketSize:
      "Loans between $10,000-$100,000 with flexible repayment terms",
    accessProcess:
      "SMEs apply through partner banks after capacity-building workshops",
    successStories:
      "Over 200 enterprises supported, 100+ secured tailored financing",
    website: "https://agefa.eu/",
    contactPerson: "Adelphi Global Team",
    position: "Financing Coordinator",
    email: "info@ugefa.eu",
    phoneNumber: "+256 702 000 500",
    attachments:
      "https://drive.google.com/open?id=1DW5caNX70bfdibgYFSihwpN76XpQ1Q5r",
  },
  {
    id: "green-climate-fund",
    name: "Green Climate Fund",
    facilityName: "Climate Finance",
    yearEstablished: "2010",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1GCz0Uf0Ijt-zOmyHnL2FXTHAqO98W_PF",
    overview: "Supports climate adaptation and mitigation projects in Uganda",
    focusAreas: "Renewable Energy, Climate-smart Agriculture",
    targetedPrivateSector: "Large Corporates, NGOs",
    financingType: "Concessional Loans, Grants, Technical Assistance",
    typicalTicketSize: "Variable, depends on project scope",
    accessProcess: "Projects apply through Uganda's Ministry of Finance",
    successStories: "Wetland restoration benefiting 800,000 people",
    website: "https://www.greenclimate.fund/",
    contactPerson: "Ministry of Finance Climate Finance Unit",
    position: "Climate Finance Analyst",
    email: "denis.mugagga@finance.go.ug",
    phoneNumber: "+256 782 805 422",
    attachments:
      "https://drive.google.com/open?id=193ubtmLirS7818ZfqwMYNGbvgpdQQHBL",
  },
  {
    id: "ministry-of-finance",
    name: "Ministry of Finance, Planning, and Economic Development",
    facilityName: "Climate Finance",
    yearEstablished: "2023",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1why6RN14LRqH0N6fqtH5VAFtcRhyG_Qb",
    overview:
      "Works to attract climate finance through innovative instruments like green bonds and carbon markets",
    focusAreas: "Renewable Energy, Climate-smart Agriculture, Circular Economy",
    targetedPrivateSector: "SMEs, Large Corporates, Government",
    financingType: "Policy-driven funding mechanisms",
    typicalTicketSize:
      "Facilitates large-scale investments via blended finance models",
    accessProcess:
      "Works with international donors and private sector investors",
    successStories: "Facilitated Uganda's climate finance strategy",
    website: "https://finance.go.ug/",
    contactPerson: "Head, Climate Finance Unit",
    position: "Senior Policy Advisor",
    email: "hr@finance.go.ug",
    phoneNumber: "+256 414 707 000",
    attachments:
      "https://drive.google.com/open?id=1UlCA8trGQ3UBsWGsvfjvwD-oVDVkfIfH",
  },
  {
    id: "african-development-bank",
    name: "African Development Bank",
    facilityName: "Africa Climate Change Fund",
    yearEstablished: "2014",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1HAqGhmwNITkuzok_qt5en0e_UYk5Tizx",
    overview: "Provides technical assistance and funding for climate projects.",
    focusAreas: "Renewable Energy, Climate-smart Agriculture",
    targetedPrivateSector: "SMEs, Large Corporates, NGO",
    financingType: "Grants, Technical Assistance",
    typicalTicketSize: "Funding varies by project size and category",
    accessProcess: "Competitive calls for proposals",
    successStories: "Over 30 projects across Africa funded",
    website: "https://www.afdb.org/",
    contactPerson: "Rita Effah",
    position: "ACCF Coordinator",
    email: "info@afdb.org",
    phoneNumber: "+225 2026 3900",
    attachments:
      "https://drive.google.com/open?id=1sVNSQKdBYZyufqYoIKm89MyaEMt80BrF",
  },
  {
    id: "global-environment-facility",
    name: "Global Environment Facility",
    facilityName: "Environment",
    yearEstablished: "1991",
    currentStatus: "Operation",
    logo: "https://drive.google.com/open?id=1OpsV7nCsQuapcbmJYmRAXLHsjdvD0oMi",
    overview: "1991",
    focusAreas: "Renewable Energy, Climate-smart Agriculture, Biodiversity",
    targetedPrivateSector:
      "Large Corporates, Government Agencies, Large Corporates",
    financingType: "Grants, Blended Finance",
    typicalTicketSize: "Large-scale investment financing",
    accessProcess:
      "Governments and NGOs apply through GEF's funding mechanisms",
    successStories: "Over $26 billion mobilized globally",
    website: "https://www.thegef.org/",
    contactPerson: "Climate Change Division Head",
    position: "Regional Lead",
    email: "secretariat@thegef.org",
    phoneNumber: "+1 202 473 0508",
    attachments:
      "https://drive.google.com/open?id=1maarPaeBUpKuGmTVVSdTVuAf2RtsOE6V",
  },
  {
    id: "stanbic-bank-uganda",
    name: "Stanbic Bank Uganda",
    facilityName: "Sustainable Finance Facility",
    yearEstablished: "2021",
    currentStatus: "Operation",
    logo: "https://www.stanbicbank.co.ug/static_file/StandardBankGroup/filedownloads/RTS/ReporttoSociety2021-SustainableFinance.pdf",
    overview:
      "Offers green, social, and sustainability-linked loans and bonds to support Uganda's transition to a low-carbon economy",
    focusAreas: "Renewable Energy, Green Buildings, Sustainable Agriculture",
    targetedPrivateSector: "SMEs, Corporates, Real Estate Developers",
    financingType: "Green Loans, Sustainability-Linked Bonds",
    typicalTicketSize: "Varies by sector and project",
    accessProcess:
      "Businesses apply through Stanbic's Corporate Banking Division",
    successStories:
      "Over 95 green energy providers supported; 321 client sites powered sustainably",
    website: "https://www.stanbicbank.co.ug/",
    contactPerson: "ESG & Sustainability Lead",
    position: "Corporate Sustainability",
    email: "sustainability@stanbic.com.ug",
    phoneNumber: "256 312 224 600",
    attachments:
      "https://www.stanbicbank.co.ug/static_file/StandardBankGroup/filedownloads/RTS/ReporttoSociety2021-SustainableFinance.pdf",
  },
  {
    id: "abi-finance",
    name: "aBi Finance",
    facilityName: "Green Challenge Fund",
    yearEstablished: "2017",
    currentStatus: "Operation",
    logo: "https://abi.co.ug/development/",
    overview:
      "Wholesale impact investment company supporting agribusinesses and smallholder farmers with climate-smart financing",
    focusAreas: "Climate-smart Agriculture, Renewable Energy",
    targetedPrivateSector: "Agribusinesses, Cooperatives, SMEs",
    financingType: "Grants, Concessional Loans",
    typicalTicketSize: "UGX 50M–500M; flexible terms",
    accessProcess: "Competitive calls for proposals via aBi portal",
    successStories:
      "Supported over 400 businesses and improved 500,000+ hectares",
    website: "https://abi.co.ug/development/",
    contactPerson: "Investment Manager",
    position: "Green Finance Lead",
    email: "info@abi.co.ug",
    phoneNumber: "256 414 237 700",
    attachments: "https://abi.co.ug/development/",
  },
  {
    id: "afreximbank",
    name: "Afreximbank",
    facilityName: "Africa Trade & Climate Finance Facility",
    yearEstablished: "1993",
    currentStatus: "Operation",
    logo: "https://www.afreximbank.com/afreximbank-pledges-to-help-bridge-africas-climate-finance-gap/",
    overview:
      "Supports African countries in bridging the $250B climate finance gap through trade-linked green investments",
    focusAreas: "Renewable Energy, Climate Resilience, Green Trade",
    targetedPrivateSector: "African Governments, Banks, Corporates",
    financingType: "Loans, Guarantees, Technical Assistance",
    typicalTicketSize: "Project-based; varies widely",
    accessProcess:
      "Through national development banks or Afreximbank regional offices",
    successStories:
      "Supported green infrastructure and clean energy trade across Africa",
    website:
      "https://www.afreximbank.com/afreximbank-pledges-to-help-bridge-africas-climate-finance-gap/",
    contactPerson: "Denys Denya",
    position: "EVP – Finance & Banking Services",
    email: "info@afreximbank.com",
    phoneNumber: "20 2 2456 4100",
    attachments:
      "https://www.afreximbank.com/afreximbank-pledges-to-help-bridge-africas-climate-finance-gap/",
  },
  {
    id: "finding-xy",
    name: "Finding XY",
    facilityName: "ACTIF, WAII, SEED, UGEFA",
    yearEstablished: "2016",
    currentStatus: "Operation",
    logo: "https://findingxy.com/",
    overview:
      "Innovation hub supporting climate-tech, agri-SMEs, and women-led enterprises through blended finance and incubation",
    focusAreas: "Climate Technologies, Green SMEs, Women in Agriculture",
    targetedPrivateSector: "Startups, Women-led Enterprises, Agri-SMEs",
    financingType: "Grants, Technical Assistance, Investment Readiness",
    typicalTicketSize: "$10K–$250K blended support",
    accessProcess: "Apply through program-specific portals (ACTIF, WAII, SEED)",
    successStories: "Supported 100+ green enterprises through UGEFA and ACTIF",
    website: "https://findingxy.com/",
    contactPerson: "Program Director",
    position: "Climate Innovation Lead",
    email: "info@findingxy.com",
    phoneNumber: "256 776 000 321",
    attachments: "https://findingxy.com/",
  },
  {
    id: "global-green-growth-institute",
    name: "Global Green Growth Institute",
    facilityName: "Greening Uganda's Urbanization & Industrialization",
    yearEstablished: "2020",
    currentStatus: "Operation",
    logo: "https://gggi.org/tag/uganda/",
    overview:
      "Supports Uganda's green growth strategy through urban planning, waste management, and green industrialization",
    focusAreas: "Urban Green Growth, Waste Management, Green Jobs",
    targetedPrivateSector: "Municipalities, SMEs, Local Governments",
    financingType: "Technical Assistance, Policy Support",
    typicalTicketSize: "Project-based",
    accessProcess: "Through Ministry of Water & Environment or GGGI Uganda",
    successStories: "Developed green city plans for Arua and Gulu",
    website: "https://gggi.org/tag/uganda/",
    contactPerson: "GGGI Uganda Team",
    position: "Country Representative",
    email: "uganda@gggi.org",
    phoneNumber: "+256 414 234 567",
    attachments: "https://gggi.org/tag/uganda/",
  },
];

export function getInstitutionById(id: string): Institution | undefined {
  return institutions.find((institution) => institution.id === id);
}
