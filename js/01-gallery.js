import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.addEventListener('click', onItemClick);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(image) {

    return galleryItems.map((image) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
`
    }).join(' ');
};



function onItemClick(event) { 
    event.preventDefault();

if (event.target.nodeName !== 'IMG') {
    return;
}
    
    const instance = basicLightbox.create(`<div class="modal">
    <img src="${event.target.dataset.source}">
    </div>`);
    instance.show();


    galleryList.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    });
}


// console.log(galleryItems);
