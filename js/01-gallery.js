'use strict'

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

class Image{
    constructor({preview, original, description}={}){
        this.source = original;
        this.src = preview;
        this.alt = description;
    }
}

const array = [];

createGalleryItemEl(galleryItems);

function createGalleryItemEl (arr){
for(const el of arr){
const galleryImage = new Image(el);
array.push(`<div class="gallery__item">
<a class="gallery__link"  href="${galleryImage.source}">
  <img
    class="gallery__image"
    src="${galleryImage.src}"
    data-source="${galleryImage.source}"
    alt="${galleryImage.alt}"
  />
</a>
</div>`);
}
}

galleryEl.insertAdjacentHTML('beforeend',`${array.join('')}`);

galleryEl.addEventListener('click', event =>{
  event.preventDefault();

  if(event.target.nodeName !== 'IMG'){
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);

  
  const onEscClick = event =>{
    if(event.code === 'Escape') {
      instance.close();
      deleteListener();
    }
    
  } 
  
 instance.show(document.addEventListener('keydown', onEscClick));

 function deleteListener(){
  document.removeEventListener('keydown', onEscClick)
 }
})
