// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

const form = document.querySelector("#search-form");};
const searchValue = "";


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchValue = form.elements.query.value;
  console.log(searchValue);
  searchByQuery(searchValue);
});

const searchByQuery = (query) => {
  console.log("searching by:", query);
  //tutaj pojdzie zapytanie
}

const searchBtn = document
  .querySelector(".search-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = form.elements.query.value;
    searchByQuery(searchValue);
  });

const clearBtn = document
  .querySelector(".clear-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    searchValue.value = "";
    searchByQuery(searchValue);
  });
