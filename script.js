// script.js

document.addEventListener("DOMContentLoaded", function () {
  const albumTiles = document.querySelectorAll(".album-tile");
  const closeBtn = document.querySelector(".close-btn");

  const albumImagesMap = {
//folder title
"Faithcheck 2023"
: [
//folder content
"Faithcheck 2023/1.jpg",
"Faithcheck 2023/IMG_7715.MOV",
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
