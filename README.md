# exercise-3

Simple project for searching and browsing pictures from API

https://tsmolarczyk.github.io/exercise-2/

## Treśc zadania

Zaprojektuj interfejs i skrypt wyszukiwania i przeglądania obrazów według słowa kluczowego.

Interfejs

Formularz wyszukiwania tworzy DOM-drzewo następnej struktury.

**_<form id="search-form">_**

**_<input_**

**_type="text"_**

**_name="query"_**

**_autocomplete="off"_**

**_placeholder="Search images..."_**

**_/>_**

**_</form>_**

Galeria obrazów tworzy DOM-drzewo następnej struktury.

**_<ul>_**

**_<!-- Zestaw elementów listy z Image cards-->_**

**_<li>_**

**_<!-- Card -->_**

**_<a href="link na duży obraz">_**

**_<img_**

**_src="link na mały obraz"_**

**_data-source="link na duży obrazе"_**

**_alt="opis"/> </a>_**

**_</li> </ul>_**

Pixabay API

Dla HTTP-requestów używaj publicznego Pixabay API. Pixabay podtrzymuje paginację REST, w odpowiedzi powinno przychodzić po 20 elementów.

Każdy obraz opisywany jest obiektem. Ciebie interesują następujące właściwości:

- webformatURL - link do małego obrazka
- largeImageURL - link do dużego obrazka

Nieskończone przewijanie

Dodaj funkcję nieskończonego przewijania strony. Podczas przewijania strony ładuje się i renderuje następna porcja obrazów. Wskazane jest zrobienie tego ręcznie przez Intersection Observer. W ostateczności można użyć biblioteki podobnej do Infinite Scroll.

Okno modalne

Dodaj możliwość przeglądania większej wersji obrazu w oknie modalnym po kliknięciu w obrazek w galerii. Do okna modalnego użyj wtyczki basicLightbox.
