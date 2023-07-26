const API_KEY = "38484825-db02a94bcd5927f53e61f3630";

const form = document.querySelector("#search-form");
const searchValue = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchValue = form.elements.query.value;
  console.log(searchValue);
  searchByQuery(searchValue);
});

console.log(basicLightbox);

const createImageCards = (data) => {
  let ul = document.createElement("ul");

  for (let i = 0; i < data.hits.length; i++) {
    console.log(data.hits[i]); // log each hit to console

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = data.hits[i].largeImageURL;

    let img = document.createElement("img");
    img.src = data.hits[i].webformatURL;
    img.dataset.source = data.hits[i].largeImageURL;
    img.alt = data.hits[i].tags;
    console.log(img, "img1");

    let instance;
    img.addEventListener("click", (event) => {
      event.preventDefault();
      instance = basicLightbox.create(`
        <img src="${img.dataset.source}" width="800" height="600">
      `);

      instance.show();
      console.log(img, "img2");
    });

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
    console.log(ul);
  }
  return ul;
};

const searchByQuery = (query) => {
  console.log("searching by:", query);
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=20`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let imageList = createImageCards(data);
      document.querySelector(".container").appendChild(imageList);
    })
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
