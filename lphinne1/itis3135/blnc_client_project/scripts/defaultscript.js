const galleryContainer = document.body;
galleryContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'IMG' && target.parentElement.tagName === 'FIGURE') {
        const figure = target.parentElement;
        const figcaption = figure.querySelector('figcaption');
        if (figcaption.style.display === 'none') { figcaption.style.display = 'block'; }
        else { figcaption.style.display = 'none'; }
    }

    if (target.tagName === 'H2' && target.parentElement.tagName === 'DIV') {
        const div = target.parentElement;
        const paragraph = div.querySelector('p');
        if (paragraph.style.display === 'none') { paragraph.style.display = 'block'; }
        else { paragraph.style.display = 'none'; }
    }
});
$(document).ready(() => {
    console.log("JQUERY IS WORKING!");
});