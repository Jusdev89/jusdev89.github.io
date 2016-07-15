var modal = document.querySelector('.modal');

// this is to close the modal for
var closebtn = document.querySelector('.modal .closebtn');

closebtn.onclick = function() {
  modal.style.display = 'none';
};

// this is to open the modal for
//  comic ONE on the screen
var comicOne = document.querySelector('.comic-one');
var comicOneContent = document.querySelector('.comic-modal-one');

comicOne.onclick = function(){
  modal.style.display = 'block';
  comicOneContent.style.display = 'block';
}

// this is to open the modal for
//  comic TWO on the screen
var comicTwo = document.querySelector('.comic-two');
var comicTwoContent = document.querySelector('.comic-modal-two');

comicTwo.onclick = function(){
  modal.style.display = 'block';
}

// this is to open the modal for
//  comic THREE on the screen
var comicThree = document.querySelector('.comic-three');

comicThree.onclick = function(){
  modal.style.display = 'block';
}

// var myIndex = 0;
// carousel();
//
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
