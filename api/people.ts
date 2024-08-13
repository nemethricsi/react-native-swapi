import { BASE_URL } from "@/constants/config";

export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export const getCharactersByName = (name: string): Promise<SwapiResponse> => {
  return fetch(`${BASE_URL}people/?search=${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(err => {
      console.error('Fetching error:', err);
      throw err;
    });
};