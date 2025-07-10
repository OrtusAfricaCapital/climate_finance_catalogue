import { Institution } from "../data/institutions";

export function searchInstitutionsByName(
  institutions: Institution[],
  query: string
): Institution[] {
  if (!query.trim()) {
    return institutions;
  }

  const searchTerm = query.toLowerCase().trim();

  // Debug logging
  console.log("Search term:", searchTerm);
  console.log("Total institutions:", institutions.length);

  const results = institutions.filter((institution) => {
    const nameMatch = institution.name.toLowerCase().includes(searchTerm);
    if (nameMatch) {
      console.log("Found match:", institution.name);
    }
    return nameMatch;
  });

  console.log("Search results:", results.length);
  return results;
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
  focusAreaFilter: string
): Institution[] {
  let filtered = institutions;

  // Apply search filter
  if (searchQuery.trim()) {
    filtered = searchInstitutionsByName(filtered, searchQuery);
  }

  // Apply focus area filter
  if (focusAreaFilter) {
    filtered = filterInstitutionsByFocusArea(filtered, focusAreaFilter);
  }

  return filtered;
}
