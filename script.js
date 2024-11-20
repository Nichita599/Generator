const photos = [
    "img/photo1.jpg",
    "img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg",
    "img/photo5.jpg",
    // Adaugă mai multe imagini aici
  ];
  
  const albumContainer = document.getElementById("album-container");
  const centerPhotoContainer = document.getElementById("center-photo-container");
  const centerPhoto = document.getElementById("center-photo");
  
  // Funcție pentru generarea albumului
  function generateAlbum() {
    photos.forEach(url => {
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("photo");
  
      const img = document.createElement("img");
      img.src = url;
      photoDiv.appendChild(img);
  
      // Adaugă funcționalitatea de click pe imagine
      photoDiv.addEventListener("click", () => displayCenterPhoto(url));
  
      albumContainer.appendChild(photoDiv);
    });
  }
  
  // Funcție pentru a afișa imaginea în centru
  function displayCenterPhoto(url) {
    centerPhoto.src = url;
    centerPhotoContainer.classList.remove("hidden");
  
    // Ascunde restul imaginilor
    Array.from(albumContainer.children).forEach(photo => {
      photo.style.opacity = "0.3";
    });
  }
  
  // Închidere imagine centrală la click pe imaginea mare
  centerPhotoContainer.addEventListener("click", () => {
    centerPhotoContainer.classList.add("hidden");
  
    // Afișează restul imaginilor
    Array.from(albumContainer.children).forEach(photo => {
      photo.style.opacity = "1";
    });
  });
  
  generateAlbum();
  