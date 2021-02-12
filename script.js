const COLUMNS = document.getElementById('column');
const IMAGE = document.getElementsByClassName('galleryimage');
//console.log(image);

// EXPAND IMAGE
function expandImage() {
    IMAGE.style.transform = "scale(1.5)";
    IMAGE.style.transition = "transform 0.25s ease";
}

// RESET IMAGE
function resetExpandImage() {
    IMAGE.style.transform = "scale(1)";
    IMAGE.style.transition = "transform 0.25s ease";
}