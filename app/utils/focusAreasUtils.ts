/**
 * Transforms a comma or semicolon-separated string of focus areas into an array of individual focus areas
 * @param focusAreasString - Comma or semicolon-separated string of focus areas
 * @returns Array of individual focus areas with whitespace trimmed
 */
export function parseFocusAreas(focusAreasString: string): string[] {
  return focusAreasString
    .split(/[,;]/)
    .map((area) => area.trim())
    .filter((area) => area.length > 0 && area !== "," && area !== ";");
}

/**
 * Transforms an array of focus areas back to a comma-separated string
 * @param focusAreasArray - Array of focus areas
 * @returns Comma-separated string of focus areas
 */
export function formatFocusAreas(focusAreasArray: string[]): string {
  return focusAreasArray.join(", ");
}

/**
 * Gets unique focus areas from a string, handling both comma and semicolon separators
 * @param focusAreasString - String containing focus areas
 * @returns Array of unique focus areas
 */
export function getUniqueFocusAreasFromString(
  focusAreasString: string
): string[] {
  return parseFocusAreas(focusAreasString);
}
