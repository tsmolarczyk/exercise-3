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
const API_KEY = "38484825-db02a94bcd5927f53e61f3630";

const form = document.querySelector("#search-form");
const searchValue = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchValue = form.elements.query.value;
  console.log(searchValue);
  searchByQuery(searchValue);
});

const searchByQuery = (query) => {
  console.log("searching by:", query);
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=20`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

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
    form.elements.query.value = "";
    searchByQuery(searchValue);
  });
