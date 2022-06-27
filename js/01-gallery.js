import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = ({ preview, original, description }) => {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
          </div>`;
};

gallery.innerHTML = galleryItems.map(galleryItem).join("");

gallery.addEventListener("click", onOpenImage);

function onOpenImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
}

console.log(galleryItems);
