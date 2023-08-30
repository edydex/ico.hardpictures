// script.js

document.addEventListener("DOMContentLoaded", function () {
  const albumTiles = document.querySelectorAll(".album-tile");
  const closeBtn = document.querySelector(".close-btn");

  const albumImagesMap = {



//album title
"McDonalds 10/11/21"
: [
//album content
"mcDonalds/1.jpg",
"mcDonalds/2.jpg",
"mcDonalds/3.jpg",
"mcDonalds/4.jpg",
"mcDonalds/5.jpg",
"mcDonalds/7.jpg",
"mcDonalds/8.jpg",
"mcDonalds/9.jpg",
"mcDonalds/10.jpg",
"mcDonalds/11.jpg",
"mcDonalds/12.jpg",
"mcDonalds/13.jpg",
"mcDonalds/14.jpg",
"mcDonalds/15.jpg",
"mcDonalds/16.jpg",
"mcDonalds/17.jpg",
"mcDonalds/18.jpg",
],

        // Add more image URLs for Random
      ],
      // Add more entries for additional albums
    };

  albumTiles.forEach(function (tile) {
    tile.addEventListener("click", function () {
      const albumTitle = tile.querySelector(".album-title").textContent;
      const albumImages = albumImagesMap[albumTitle];

      if (albumImages) {
        const imageLinks = albumImages.map((image) => `<a href="${image}" target="_blank"><img src="${image}" alt="${albumTitle}" class="album-image"></a>`).join("");

        const imageGrid = document.querySelector(".image-grid");
        imageGrid.innerHTML = imageLinks;

        const albumModal = document.querySelector(".album-modal");
        albumModal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    const albumModal = document.querySelector(".album-modal");
    albumModal.style.display = "none";

    const imageGrid = document.querySelector(".image-grid");
    imageGrid.innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    const albumModal = document.querySelector(".album-modal");
    if (event.target === albumModal) {
      albumModal.style.display = "none";

      const imageGrid = document.querySelector(".image-grid");
      imageGrid.innerHTML = "";
    }
  });
});
