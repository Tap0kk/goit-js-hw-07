import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${imgUrl}" width="1280" height="auto"/>
    `,
    {
      onShow: (instance) => {
        window.addEventListener(`keydown`, onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener(`keydown`, onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
  }
}
console.log(galleryItems);
