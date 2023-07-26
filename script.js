const API_KEY = "38484825-db02a94bcd5927f53e61f3630";
let page = 1;
let currentLastItem;
let totalPageCount;

const form = document.querySelector("#search-form");

const searchValue = "";

//observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let i = 0;
      i++;
      page++;
      searchByQuery(form.elements.query.value, page);
    }
  });
}, options);
//observer ends

form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  document.querySelector(".container").innerHTML = "";

  const searchValue = form.elements.query.value;
  searchByQuery(searchValue, page);
});

const createImageCards = (data) => {
  let ul = document.createElement("ul");

  for (let i = 0; i < data.hits.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = data.hits[i].largeImageURL;

    let img = document.createElement("img");
    img.src = data.hits[i].webformatURL;
    img.dataset.source = data.hits[i].largeImageURL;
    img.alt = data.hits[i].tags;

    let instance;
    img.addEventListener("click", (event) => {
      event.preventDefault();
      instance = basicLightbox.create(`
        <img src="${img.dataset.source}" width="800" height="600">
      `);

      instance.show();
    });

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
    console.log(ul);
  }
  return ul;
};

const searchByQuery = (query, page = 1) => {
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=5&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      totalPageCount = Math.ceil(data.totalHits / 5);
      let imageList = createImageCards(data);
      document.querySelector(".container").appendChild(imageList);
      const listItems = document.querySelectorAll("li");

      if (currentLastItem) {
        observer.unobserve(currentLastItem);
      }
      if (page < totalPageCount) {
        currentLastItem = listItems[listItems.length - 1];
        observer.observe(currentLastItem);
      }
    })
    .catch((error) => console.error("Error:", error));
};

const searchBtn = document
  .querySelector(".search-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = form.elements.query.value;
    document.querySelector(".container").innerHTML = "";

    searchByQuery(searchValue);
  });

const clearBtn = document
  .querySelector(".clear-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    form.elements.query.value = "";
  });

const removeBtn = document
  .querySelector(".remove-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".container").innerHTML = "";
  });
