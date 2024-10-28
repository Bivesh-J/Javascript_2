window.onload = function() {
    console.log('Page has loaded');
    addTabindexToImages();
};

function upDate(previewPic) {
    console.log('Event triggered: ', previewPic); // Check if the event triggers
    console.log('Alt: ', previewPic.alt);
    console.log('Source: ', previewPic.src);

    // Change the text of the div with id "image"
    document.getElementById('image').innerText = previewPic.alt;

    // Change the background image of the div with id "image"
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}

function addTabindexToImages() {
    const images = document.querySelectorAll('.thumbnail');
    for (let img of images) {
        img.setAttribute('tabindex', '0');
    }
}
