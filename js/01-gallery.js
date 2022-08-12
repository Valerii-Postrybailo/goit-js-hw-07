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
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `})
    .join("")
}

////////////////////////////////////////////////////

gallery.addEventListener("keydown", event => {
  if (event.code === 'Enter') {
    event.preventDefault(onClick);
    console.log("Enter worked")
    console.log(`We ara here: ${event.target}`)
    onClick(event.target)
  } 
})

/////////////////////////////////////////////////////

gallery.addEventListener("click", onClick)

function onClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return
  }

  event.preventDefault();
  
  console.log(event.target.dataset.source)

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

  instance.show()
  console.log(instance.show())

  ///////////////////////////////////////////////////////////////////////
  
  // window.addEventListener("keydown", (event) => {

  //   if (event.code === 'Escape') {
  //     console.log("key worked")
  //     instance.close()
  //     }
  //   })

  window.addEventListener("keydown", onEscPress)

  function onEscPress(event) {

    if (event.code === 'Escape') {
      console.log("key worked")
      instance.close(removeKeyEventListener)
      }
    }

  function removeKeyEventListener() {
    window.removeEventListener("keydown", onEscPress)
  }

  const body = document.querySelector("body")
    console.log(body)
}
