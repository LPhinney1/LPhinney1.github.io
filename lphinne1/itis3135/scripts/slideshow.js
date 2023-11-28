let currentSlideIndex = 1;
showImage(currentSlideIndex);

function plusEqualsSlideIndex(n) 
{ showImage(currentSlideIndex += n); }

function currentImage(n) 
{ showImage(currentSlideIndex = n); }

function showImage(n) {
    let slideshowImages = document.getElementsByClassName("slideshow-image");
    let thumbnailImages = document.getElementsByClassName("thumbnail-image");
    let captionText = document.getElementById("caption-text");

    if (n > slideshowImages.length) 
    { currentSlideIndex = 1 }
    if (n < 1) 
    { currentSlideIndex = slideshowImages.length }
    
    let i;
    for (i = 0; i < slideshowImages.length; i++) 
    { slideshowImages[i].style.display = "none"; }

    for (i = 0; i < thumbnailImages.length; i++) 
    { thumbnailImages[i].classList.remove("active"); }

    slideshowImages[currentSlideIndex - 1].style.display = "block";
    thumbnailImages[currentSlideIndex - 1].classList.add("active");
    captionText.textContent = thumbnailImages[currentSlideIndex - 1].alt;
}