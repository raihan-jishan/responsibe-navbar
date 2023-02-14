//  writing the simple a function for toggle navbar 
//  require all property from dom manup... 
hamburger = document.querySelector(".hamburger"); 
hamburger.onclick = function() {
    navbar = document.querySelector(".navbar"); 
    navbar.classList.toggle("active"); 
}