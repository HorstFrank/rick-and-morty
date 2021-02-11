export type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type APICharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APICharacter[];
};

export type Character = {
  imgSrc: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  origin: {
    name: string;
  };
};

function convertToCharacter(apiCharacter: APICharacter): Character {
  // console.log(new Character());
  // return Object.assign(Character, apiCharacter);
  return {
    imgSrc: apiCharacter.image,
    name: apiCharacter.name,
    status: apiCharacter.status,
    species: apiCharacter.status,
    origin: {
      name: apiCharacter.origin.name,
    },
  };
}

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const result = (await response.json()) as APICharacter;
  const character = convertToCharacter(result);
  return character;
}

export async function getCharacters(name?: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character${name ? `?name=${name}` : ""}`
  );
  const result = (await response.json()) as APICharacters;
  const characters = result.results.map((apiCharacter) =>
    convertToCharacter(apiCharacter)
  );
  return characters;
}

function getInnerLinks(html: string): Array {
  // https://monkeyisland.fandom.com
  // <a\shref="(.*?)":*>(Category:)?(.*)<

  let arr = [];

  let result = html.matchAll(
    /<a\shref="(?<innerUrl>[^"]*)"[^>]*>(?<kind>Category:)?(?<title>.*)<\/a/g
  );

  for (let r of result) {
    arr.push(r.groups);
  }

  // for (let r of result) {
  //   // alert(result);
  //   // first alert: <h1>,h1
  //   // second: <h2>,h2
  // }
  console.log(arr);
}

export async function getApiTest(name?: string) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://monkeyisland.fandom.com/wiki/Category:In-Universe`
  );
  console.log(response.status);
  const result = await response.text();

  getInnerLinks(result);
  // console.log(result);
}
