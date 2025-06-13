let currentImageIndex = 0;
const imageList = [
  "KJJeong1.png",
  "KJJeong2.png",
  "KJJeong3.png",
  "KJJeong4.png",
  "KJJeong5.png",
  "KJJeong6.png",
  "KJJeong7.png",
  "KJJeong8.png",
  "KJJeong9.png",
  "KJJeong10.png",
  "KJJeong11.png"
];

function showImage(index) {
  const imageDisplay = document.getElementById("imageDisplay");
  imageDisplay.src = imageList[index];
}

function previousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showImage(currentImageIndex);
  }
}

function nextImage() {
  if (currentImageIndex < imageList.length - 1) {
    currentImageIndex++;
    showImage(currentImageIndex);
  }
}

function resetImages() {
  currentImageIndex = 0;
  showImage(currentImageIndex);
}

window.onload = function() {
  showImage(currentImageIndex);
  document.getElementById("prevBtn").addEventListener("click", previousImage);
  document.getElementById("nextBtn").addEventListener("click", nextImage);
  document.getElementById("resetBtn").addEventListener("click", resetImages);
};
