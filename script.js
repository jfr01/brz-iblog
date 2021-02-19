// const COLUMNS = document.getElementById('column');
// const IMAGE = document.getElementsByClassName('galleryimage');
//console.log(image);

// // EXPAND IMAGE
// function expandImage() {
//     IMAGE.style.transform = "scale(1.5)";
//     IMAGE.style.transition = "transform 0.25s ease";
// }

// // RESET IMAGE
// function resetExpandImage() {
//     IMAGE.style.transform = "scale(1)";
//     IMAGE.style.transition = "transform 0.25s ease";
// }


let modal = document.getElementById('myModal');
let img = document.getElementsByClassName('galleryimage');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let span = document.getElementsByClassName('close')[0];


img.onClick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

span.onClick = function () {
    modal.style.display = "none";
}
