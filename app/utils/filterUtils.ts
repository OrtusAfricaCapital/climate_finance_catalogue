import { Institution } from "../data/institutions";

export function searchInstitutionsByFinancingType(
  institutions: Institution[],
  query: string
): Institution[] {
  if (!query.trim()) {
    return institutions;
  }

  const searchTerm = query.toLowerCase().trim();

  return institutions.filter((institution) => {
    // Search across multiple relevant fields
    const searchableText = [
      institution.name.toLowerCase(),
      institution.facilityName.toLowerCase(),
      institution.financingType.toLowerCase(),
      institution.focusAreas.toLowerCase(),
      institution.overview.toLowerCase(),
      institution.targetedPrivateSector.toLowerCase(),
    ].join(" ");

    // Check if the search term is contained within any of the searchable fields
    return searchableText.includes(searchTerm);
  });
}

export function filterInstitutionsByFocusArea(
  institutions: Institution[],
  focusArea: string
): Institution[] {
  if (!focusArea) {
    return institutions;
  }

  return institutions.filter((institution) => {
    // Split focus areas by comma or semicolon and check if any match
    const areas = institution.focusAreas
      .split(/[,;]/)
      .map((area) => area.trim().toLowerCase());
    return areas.includes(focusArea.toLowerCase());
  });
}

export function sortInstitutions(
  institutions: Institution[],
  sortBy: string
): Institution[] {
  if (!sortBy) {
    return institutions;
  }

  const sorted = [...institutions];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "year":
      return sorted.sort(
        (a, b) => parseInt(a.yearEstablished) - parseInt(b.yearEstablished)
      );
    case "year-desc":
      return sorted.sort(
        (a, b) => parseInt(b.yearEstablished) - parseInt(a.yearEstablished)
      );
    case "financing":
      return sorted.sort((a, b) =>
        a.financingType.localeCompare(b.financingType)
      );
    default:
      return sorted;
  }
}

export function getUniqueFocusAreas(institutions: Institution[]): string[] {
  const allFocusAreas = institutions.flatMap((institution) => {
    // Handle both comma and semicolon separators, and clean up the data
    const areas = institution.focusAreas
      .split(/[,;]/) // Split by comma or semicolon
      .map((area) => area.trim())
      .filter((area) => area.length > 0 && area !== "," && area !== ";");
    return areas;
  });

  return [...new Set(allFocusAreas)].sort();
}

export function applySearchAndFilter(
  institutions: Institution[],
  searchQuery: string,
  focusAreaFilter: string,
  sortBy: string = ""
): Institution[] {
  let filtered = institutions;

  // Apply search filter
  if (searchQuery.trim()) {
    filtered = searchInstitutionsByFinancingType(filtered, searchQuery);
  }

  // Apply focus area filter
  if (focusAreaFilter) {
    filtered = filterInstitutionsByFocusArea(filtered, focusAreaFilter);
  }

  // Apply sorting
  if (sortBy) {
    filtered = sortInstitutions(filtered, sortBy);
  }

  return filtered;
}
