import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Multiple = () => {
  const characters: Character[] = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
    },
  ];

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

type CharacterFromAPIProps = {
  loaded: {
    character: Character;
  };
};
export const CharacterFromAPI = (
  args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(666),
  }),
];

type CharactersFromAPIProps = {
  loaded: {
    characters: Character[];
  };
};
export const CharactersFromAPI = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

const getRand = (min, max) => parseInt(Math.random() * (max - min) + min);

export const randCharacterFromAPI = (
  args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

randCharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(666),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      console.log("onclick start");
      // Verify each step (alert, console.log)
      // 1) generate random character id
      const id = getRand(1, 666);
      // console.log("Randoom Id: ", id);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // 2) getCharacter from API

      // const c = randCharacterFromAPI();
      // console.log("Character data: ", c);
      // 3) create card
      // 4) append card
      // 5) make sure to only display one character
      // 6) feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};

export const CharactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const input = createElement("input", {
    className: "input",
    type: "text",
    onchange: async () => {
      const newCards = await getCharacters(input.value);
      // console.log(newCards);
      resultCards.innerText = "";
      resultCards.append(...newCards.map((item) => createCard(item)));
    },
  });

  const resultCards = createElement("div", {
    className: "result",
    childs: [...characters.map((character) => createCard(character))],
  });

  const container = createElement("div", {
    className: "container",
    childs: [input, resultCards],
  });
  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
