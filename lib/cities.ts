import type { City } from "./city-types";
import { citiesA } from "./cities-a";
import { citiesB } from "./cities-b";
import { citiesC } from "./cities-c";
import { citiesD } from "./cities-d";

export type { City } from "./city-types";

export const cities: City[] = [...citiesA, ...citiesB, ...citiesC, ...citiesD].sort((a, b) =>
  a.naam.localeCompare(b.naam, "nl")
);

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** De grootste kernen, gebruikt in de navigatie en op de homepage. */
export const hoofdSteden = cities.filter((c) => c.prioriteit === 1);
