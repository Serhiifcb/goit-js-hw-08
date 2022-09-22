import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const refGallery = document.querySelector('.gallery');
function createGallery() {
  const markup = galleryItems
    .map(
      item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join('');
  refGallery.insertAdjacentHTML('beforeend', markup);
}
createGallery();
refGallery.addEventListener('click', makeLightbox, { once: true });
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
function makeLightbox(event) {
  event.preventDefault();
}
// console.log(galleryItems);
