import { createElement } from "../../utils/createElement";

/*

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

*/
export function createFlipCard({ imgSrc, name, species, status, origin }) {
  return createElement("div", {
    className: "flip-card",
    childs: [
      createElement("div", {
        className: "flip-card-inner",
        childs: [
          createElement("div", {
            className: "flip-card-front",
            childs: [
              createElement("div", {
                className: "card",
                childs: [
                  createElement("img", {
                    className: "card__image",
                    src: imgSrc,
                    alt: "",
                  }),
                  createElement("h2", {
                    className: "card__name",
                    innerText: name,
                  }),
                  createElement("div", {
                    className: "card___species",
                    innerText: species,
                  }),
                  createElement("div", {
                    className: "card___name",
                    innerText: `${
                      status === "Alive" ? ":) - " : ":( - "
                    } ${status}`,
                  }),
                  createElement("div", {
                    className: "card___name",
                    innerText: origin.name,
                  }),
                ],
              }),
            ],
          }),
          createElement("div", {
            className: "flip-card-back",
            childs: [
              createElement("div", {
                className: "card card--back",
                childs: [
                  createElement("img", {
                    className: "card__image--back",
                    src: imgSrc,
                    alt: "",
                  }),
                  createElement("h2", {
                    className: "card__name",
                    innerText: name,
                  }),
                  createElement("div", {
                    className: "card___species",
                    innerText: species,
                  }),
                  createElement("div", {
                    className: "card___name",
                    innerText: `${
                      status === "Alive" ? ":) - " : ":( - "
                    } ${status}`,
                  }),
                  createElement("div", {
                    className: "card___name",
                    innerText: origin.name,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // return createElement("div", {
  //   className: "card",
  //   childs: [
  //     createElement("img", {
  //       className: "card__image",
  //       src: imgSrc,
  //       alt: "",
  //     }),
  //     createElement("h2", {
  //       className: "card__name",
  //       innerText: name,
  //     }),
  //     createElement("div", {
  //       className: "card___species",
  //       innerText: species,
  //     }),
  //     createElement("div", {
  //       className: "card___name",
  //       innerText: `${status === "Alive" ? ":) - " : ":( - "} ${status}`,
  //     }),
  //     createElement("div", {
  //       className: "card___name",
  //       innerText: origin.name,
  //     }),
  //   ],
  // });
}

export function createCard({ imgSrc, name, species, status, origin }) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__image",
        src: imgSrc,
        alt: "",
      }),
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("div", {
        className: "card___species",
        innerText: species,
      }),
      createElement("div", {
        className: "card___name",
        innerText: `${status === "Alive" ? ":) - " : ":( - "} ${status}`,
      }),
      createElement("div", {
        className: "card___name",
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
