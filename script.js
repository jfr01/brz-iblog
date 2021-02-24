// let modal = document.getElementById('myModal');
// let img = document.getElementsByClassName('galleryimage');
// let modalImg = document.getElementById('img01');
// let captionText = document.getElementById('caption');
// let span = document.getElementsByClassName('close')[0];


// // img.onClick = function () {
// //     modal.style.display = "block";
// //     modalImg.src = this.src;
// //     captionText.innerHTML = this.alt;
// // }

// img.forEach(e => e.onClick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// })

// span.onClick = function () {
//     modal.style.display = "none";
// }


let modal = document.getElementById('myModal');
let images = document.getElementsByClassName('galleryimage');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let span = document.getElementsByClassName('close')[0];


Array.from(images).forEach(function (img) {
    console.log(img);
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
})