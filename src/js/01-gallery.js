// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items';

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
galleryItems.forEach(e => {
    galleryEl.innerHTML += `<li class="gallery__item">
    <a class="gallery__link" href="${e.original}">
       <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
    </a>
 </li>` 
  
})

let lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});
