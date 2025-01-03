import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionsDelay: 250, captionsPosition: 'bottom' });

console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(image) { 

    return galleryItems.map((image) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
 </li>`
    }).join(' ');
};
    


// console.log(galleryItems);
