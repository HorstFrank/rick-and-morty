import { createElement } from "../../utils/createElement";
import { createCard } from "../../components/card/card";

export function createCardList(characterList) {
  // const list = characterList.map(element => createCard(element))

return createElement('div',{
  className: 'character-list',
  childs:[
    ...characterList.map(element => createCard(element))
  ]
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



