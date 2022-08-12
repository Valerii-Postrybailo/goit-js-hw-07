import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

////////////////////////////////////////////////////

const gallery = document.querySelector(".gallery");
console.log(gallery)

const imgMarkup = createGalleryMarkup(galleryItems)

gallery.insertAdjacentHTML('afterbegin', imgMarkup)

function createGalleryMarkup(items) { 
  return items
    .map(({ preview, original, description }) => {
      return`
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"  title ="${description}"/>
      </a>
  `})
    .join("")
}

  new SimpleLightbox('.gallery a', {captionDelay	:250 });

