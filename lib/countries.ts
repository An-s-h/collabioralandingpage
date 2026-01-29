// Country data type
export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
}

// Cache for countries data
let countriesCache: Country[] | null = null;

/**
 * Fetches all countries from REST Countries API
 * Caches the result for subsequent calls
 */
export async function getCountries(): Promise<Country[]> {
  if (countriesCache) {
    return countriesCache;
  }

  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,cca3');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data: Country[] = await response.json();
    // Sort countries alphabetically by common name
    countriesCache = data.sort((a, b) => 
      a.name.common.localeCompare(b.name.common)
    );
    return countriesCache;
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Return empty array on error
    return [];
  }
}

/**
 * Filters countries based on search text
 * Prioritizes countries that start with the search text
 * @param searchText - The text to search for
 * @param countries - Array of countries to filter
 * @returns Filtered array of countries
 */
export function filterCountries(searchText: string, countries: Country[]): Country[] {
  if (!searchText.trim()) {
    return [];
  }
  
  const lowerSearch = searchText.toLowerCase().trim();
  
  // Filter countries that match the search
  const matched = countries.filter(country => {
    const commonName = country.name.common.toLowerCase();
    const officialName = country.name.official.toLowerCase();
    const cca2 = country.cca2.toLowerCase();
    const cca3 = country.cca3.toLowerCase();
    
    return (
      commonName.includes(lowerSearch) ||
      officialName.includes(lowerSearch) ||
      cca2.includes(lowerSearch) ||
      cca3.includes(lowerSearch)
    );
  });
  
  // Sort: countries starting with search text first, then others
  const sorted = matched.sort((a, b) => {
    const aCommon = a.name.common.toLowerCase();
    const bCommon = b.name.common.toLowerCase();
    
    const aStarts = aCommon.startsWith(lowerSearch);
    const bStarts = bCommon.startsWith(lowerSearch);
    
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    
    // If both start or both don't start, sort alphabetically
    return aCommon.localeCompare(bCommon);
  });
  
  return sorted.slice(0, 10); // Limit to 10 suggestions
}

