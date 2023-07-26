import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery-list')
const markup = listMarkup(list);

function listMarkup() {
  const gallery = galleryItems
  .map((img) => `<li class='gallery__item'><a class="gallery__link" href="${img.original}"><img class = 'gallery__image' src=${img.photo} alt=${img.descr} ></img></a></li>`)
  .join('');

list.insertAdjacentHTML('afterbegin', gallery)}
let lightbox = new SimpleLightbox('.gallery-list a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
})