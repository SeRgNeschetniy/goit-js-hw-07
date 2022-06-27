import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`;
};

gallery.innerHTML = galleryItems.map(galleryItem).join("");

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captions: true,
});

console.log(galleryItems);
