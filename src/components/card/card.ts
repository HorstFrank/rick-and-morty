import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, species, status, origin }) {
  return createElement("div", {
    className: "card",
    childs: [
        createElement("img", {
            className: 'card__image',
          src: imgSrc,
          alt: '',
        }),
        createElement("h2", {
            className: 'card__name',
          innerText: name
        }),
        createElement("div", {
            className: 'card___species',
          innerText: species,
        }),
        createElement("div", {
            className: 'card___name',
          innerText: `${(status === 'Alive' ? ':) - ' : ':( - ')} ${status}`, 
        }),
        createElement("div", {
            className: 'card___name',
          innerText: origin.name,
        }),
    ],
  });
}

/*
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    species: "Human",
    status: 'Alive',
    origin: {name:"Earth (C-137)"},
    
    imgSrc, name, species, status, origin


*/



