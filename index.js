const slideshowElements = document.querySelectorAll('.slideshow-element');
 let countElements = 1;
setInterval(() => {
  countElements++;
  // continue;
  let currentElement = document.querySelector(".current");

currentElement.classList.remove("current");

if (countElements > slideshowElements.length)
 {

  slideshowElements[0].classList.add("current");
}
else{
  currentElement.nextElementSibling.classList.add("current");
  
}

}, 3000);