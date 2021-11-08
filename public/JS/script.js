// Logic behind the carousel component

// Shows the first page ate default
var slide_index = 1;
slidesDisplay(slide_index);
// The slide index will += 1 to move to the next slide
function nextSlide(n) {
    slidesDisplay(slide_index += n);
}
// Then make the next slide as the current slide
function currentSlide(n) {
    slidesDisplay(slide_index = n);
}
// Displaying the slide
function slidesDisplay(n) {
    var i;
    var slides = document.getElementsByClassName("showSlider");

    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slide_index - 1].style.display = "block";
    }
    
}

// Logic behind the Review-tab component
function openCategory(evt, categoryName) {
var i, tabcontent, tablinks;
// The tab content should be hidden prior to the tab links clicked
tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
// When the tab link is clicked it then displays the tab content.
tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
document.getElementById(categoryName).style.display = "block";
evt.currentTarget.className += " active";
    }
