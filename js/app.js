
/*
(function () {

  // global variables

  const storeItems = document.querySelectorAll('.store-item');
  const storeImages = document.querySelectorAll('.store-img');


  // modal

  const modalContainer = document.querySelector('.lightbox-container');
  const modalItem = document.querySelector('.lightbox-item');
  const closeItem = document.querySelector('.lightbox-close');
  const modalButtons = document.querySelectorAll('.lightbox-control');

  const pictures = [
    'img/cake-1.jpeg',
    'img/cake-2.jpeg',
    'img/cake-3.jpeg',
    'img/cupcake-1.jpeg',
    'img/cupcake-2.jpeg',
    'img/cupcake-3.jpeg',
    'img/doughnut-1.jpeg',
    'img/doughnut-2.jpeg',
    'img/doughnut-3.jpeg',
    'img/sweets-1.jpeg',
    'img/sweets-2.jpeg',
    'img/sweets-3.jpeg'
  ]

  let counter = 0;



  //open modal --- klik op storeitem of storeimg?

  
  storeImages.forEach(image => {
    image.addEventListener('click', function() {
      
      modalContainer.style.display = 'block';
    })
  })
  


  function openModal() {

    storeImages.forEach( image => {
      image.addEventListener('click', function() {

        modalContainer.style.display = 'block';
        
        
        const imageSrc = this.getAttribute('src');
        console.log(imageSrc);
        
        /*
        // get index of array
       const indexArray = pictures.indexOf(imageSrc);
       console.log('check index of array:'+ indexArray)

       // 
       console.log(pictures[indexArray])

       modalItem.style.backgroundImage = `url(./${pictures[indexArray]})`;
        
        modalItem.style.backgroundImage = `url(./${imageSrc})`;
       
        // solution would be to start at the clicked img 

      })
    })
  }

  openModal();

  // buttons

  modalButtons.forEach(button => {

    button.addEventListener('click', function () {

      
    
      // left button
      if (button.classList.contains('btnLeft')) {
        console.log('left');

        
        counter--;
        if(counter < 0) {
          counter = pictures.length -1;
        }

        modalItem.style.backgroundImage = `url(./${pictures[counter]})`
       
      }

      // right button

      if (button.classList.contains('btnRight')) {
        console.log('right');

        counter++;
        if (counter > pictures.length -1) {
          counter = 0;
        }

        modalItem.style.backgroundImage = `url(./${pictures[counter]})`
       
      }

    })
  })

  // close modal

  closeItem.addEventListener('click', function () {
    console.log('close')
    modalContainer.style.display = 'none';
  })

})();

*/


/*
(function() {

let storeItems = document.querySelectorAll('.store-item');

let modalContainer = document.querySelector('.lightbox-container');
let modalItem = document.querySelector('.lightbox-item');

let buttons = document.querySelectorAll('.lightbox-control');

let images = document.querySelectorAll('.store-img');

let modalClose = document.querySelector('.lightbox-close');

let imageArray = [];

let counter = 0;


// for loop through images so we can make a copy and store it into emptyarray

images.forEach(image => {

  imageArray.push(image.src)
  // console.log('check imageArray: ' + imageArray);
})

// add click event listener to each store item

storeItems.forEach(item => {
  item.addEventListener('click', function(e) {

    let image = e.target.src;
    console.log('imagesrc: ' + image)

    //change the background img property of the lightbox item

    modalItem.style.backgroundImage = `url(${image})`
    
    //show the modal with the selected image

    modalContainer.style.display = 'block';

    //get the array index number for the image that was selected
   
    let arrayCounter = imageArray.indexOf(image);
    console.log('check arrayIndex: ' + arrayCounter)

  })
})

buttons.forEach(button => {
  button.addEventListener('click', function() {

    if(button.classList.contains('btnLeft')) {
      console.log('left')
      arrayCounter--;
      if(arrayCounter < 0) {
        arrayCounter = imageArray.length -1;
      }
      console.log('check counter -: ' + arrayCounter)
      modalItem.style.backgroundImage = `url(${imageArray[arrayCounter]})`;
    }

    if(button.classList.contains('btnRight')) {
      console.log('right')
      arrayCounter++;
      if(arrayCounter >= imageArray.length) {
        arrayCounter = 0;
      }
      console.log('check counter +: ' + arrayCounter);
      modalItem.style.backgroundImage = `url(${imageArray[arrayCounter]})`;
    }
  })
})

/*
let btnLeft = document.querySelector('.btnLeft');
btnLeft.addEventListener('click', function() {
  counter--;
  if(counter < 0) {
    counter = imageArray.length - 1;
  }
  console.log('check counter -: ' + counter);
  modalItem.style.backgroundImage = `url(${imageArray[counter]})`;
});

let btnRight = document.querySelector('.btnRight');

btnRight.addEventListener('click', function() {
  counter++;
  if(counter >= imageArray.length) {
    counter = 0;
  }

  console.log('check counter +: ' + counter)
  modalItem.style.backgroundImage = `url(${imageArray[counter]})`;
})
*/
/*
  //wire up the left and right buttons
  //select left button from the DOM
  let btnLeft = document.querySelector('.btnLeft');
  btnLeft.addEventListener('click', function(){
    imageCounter--;
    if (imageCounter < 0){
      imageCounter = imageList.length -1;
    }
    console.log('check counter -: ' + imageCounter);
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
  });
    //select left button from the DOM
  let btnRight = document.querySelector('.btnRight');
  btnRight.addEventListener('click', function(){
    imageCounter++;
    if (imageCounter >= imageList.length){
      imageCounter = 0;
    }
    console.log('check counter +:' + imageCounter);
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });
*/
/*
modalClose.addEventListener('click', function() {

  modalContainer.style.display = 'none';
})


  //wire up the modal's close button
  let lightBoxClose = document.querySelector('.lightbox-close');
  lightBoxClose.addEventListener('click', function(){
  lightBox.classList.remove('show');
  });



})();


*/

/*
(function() {

  // Global variables
  let storeItems = document.querySelectorAll('.store-item');
  let storeImages = document.querySelectorAll('.store-img');
  let modalContainer = document.querySelector('.lightbox-container');

  let modalClose = document.querySelector('.lightbox-close');
  let modalItem = document.querySelector('.lightbox-item');

  let buttons = document.querySelectorAll('.lightbox-control');

  let imageArray = [];

  let imageCounter = 0;

  // select all images and put it in array

  storeImages.forEach(image => {
    
    // get all images src
    imageArray.push(image.src);
    
  })

  // click event store item

  
  storeItems.forEach(item => {
    item.addEventListener('click', function(e) {
      
      // get the image src

      let image = e.target.src;
      
      // set background to the image src

      modalItem.style.backgroundImage = `url(${image})`;

      // open modal

      modalContainer.style.display = 'block';

      // get index of array and put it as counter so we can start from there

      imageCounter = imageArray.indexOf(image)
      console.log('check index of array image: ' + imageCounter)
    })
  })

  buttons.forEach(button => {
    button.addEventListener('click', function() {

      if(button.classList.contains('btnLeft')) {
        imageCounter--;

        if(imageCounter < 0 ) {
          imageCounter = imageArray.length -1
        }
        console.log('check imagecounter +: ' + imageCounter)
        modalItem.style.backgroundImage = `url(${imageArray[imageCounter]})`
      }

      if(button.classList.contains('btnRight')) {
        imageCounter++;
  
        if(imageCounter > imageArray.length - 1) {
          imageCounter = 0;
        }
        console.log('check imagecounter +: ' + imageCounter)
        modalItem.style.backgroundImage = `url(${imageArray[imageCounter]})`;
      }
    })

    
  })

  // function close modal

  modalClose.addEventListener('click', function() {

    modalContainer.style.display = 'none';
  })

})()
*/


(function() {


  // global variables

let storeItems = document.querySelectorAll('.store-item');
let storeImages = document.querySelectorAll('.store-img');

let modalContainer = document.querySelector('.lightbox-container');
let lightboxItem = document.querySelector('.lightbox-item');
let lightboxClose = document.querySelector('.lightbox-close');
let buttons = document.querySelectorAll('.lightbox-control');

let imageArray = [];

let imageCounter = 0;

// get images src with for loop and push it in array

storeImages.forEach(image => {
  
  imageArray.push(image.src);
  
})

// click event storeitems

storeItems.forEach(item => {
   item.addEventListener('click', function(e) {
     
    // get image src

    let image = e.target.src;
    
    lightboxItem.style.backgroundImage = `url(${image})`;

    modalContainer.style.display = 'block';

    // get index of array

    imageCounter = imageArray.indexOf(image);
    console.log('check index and assign it with imagecounter: ' + imageCounter)
   })
})

buttons.forEach(button => {

  button.addEventListener('click', function() {

    if(button.classList.contains('btnLeft')) {
      imageCounter--;

      if(imageCounter < 0) {
        imageCounter = imageArray.length - 1;
      }
      console.log('check imagecounter -: ' + imageCounter)
      lightboxItem.style.backgroundImage = `url(${imageArray[imageCounter]})`
    }

    if(button.classList.contains('btnRight')) {
      imageCounter++;

      if(imageCounter > imageArray.length - 1) {
        imageCounter = 0;
      }
      console.log('check imagecounter +: ' + imageCounter)

      lightboxItem.style.backgroundImage = `url(${imageArray[imageCounter]})`
    }
  })
})

lightboxClose.addEventListener('click', function() {

  modalContainer.style.display = 'none';
})

})();






































/*

//Use an IIFE to avoid contanminating global namespce
(function(){
  //Grab stores items from the DOM
  let storeItems = document.querySelectorAll('.store-item');
  //grab lightbox container
  let lightBox = document.querySelector('.lightbox-container');
   //grab the div with the lightbox item
  let lightBoxItem = document.querySelector('.lightbox-item');
  //grab all the images from the store items
  let images = document.querySelectorAll('.store-img');


  // set up an array for the items
  let imageList = [];
  //set up a counter to run through the list of images
  let imageCounter = 0;
  //use a forEach loop to get a copy of all the images and push into an array of items
  images.forEach(function(image){
    //push each imageto the array of images
    imageList.push(image.src);
  //   console.log('check imageList: ' + imageList)
  })

  //Add an a click event listener to each store item
  storeItems.forEach(function(item) {
    //On click, allow the model container to show
    //Change css class from display none to display block
    item.addEventListener('click', function(e){
    //grab the image of the item that was clicked
    let image = e.target.src;
    console.log('check image src: ' + image)
    //change the background img property of the lightbox item
    lightBoxItem.style.backgroundImage = `url(${image})`;
    //show the modal with the selected image
    lightBox.classList.add('show');
    //get the array index number for the image that was selected
    imageCounter = imageList.indexOf(image);
    console.log('get the arrayindex: ' + imageCounter);
    });
  });

  //wire up the left and right buttons
  //select left button from the DOM
  let btnLeft = document.querySelector('.btnLeft');
  btnLeft.addEventListener('click', function(){
    imageCounter--;
    if (imageCounter < 0){
      imageCounter = imageList.length -1;
    }
    console.log('check counter -: ' + imageCounter);
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
  });
    //select left button from the DOM
  let btnRight = document.querySelector('.btnRight');
  btnRight.addEventListener('click', function(){
    imageCounter++;
    if (imageCounter >= imageList.length){
      imageCounter = 0;
    }
    console.log('check counter +:' + imageCounter);
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });

  //wire up the modal's close button
    let lightBoxClose = document.querySelector('.lightbox-close');
    lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('show');
    });

})();
*/
/*
Notes during project
1. Tried to add an event listener to a node list. Had to actually do a forEach on the node list.
https://stackoverflow.com/questions/55667793/uncaught-typeerror-input-addeventlistener-is-not-a-function
2. Tried to use style.classList and then .show instead of just the string show. 'style not needed'
3. How to access the individual CSS properties (without simply adding a class)
4. I struggled with change the background. I thought I would be able to simply use element.style.background = 'image' but I realized I needed to use 'url(img);
5. Had a bug in my code where I misspelled background. backgound vs. background

*/