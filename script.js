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

const canvas = document.getElementById("imageCanvas");
const ctx = canvas.getContext("2d");

function showImage(index) {
  const img = new Image();
  img.src = imageList[index];
  img.onload = function () {
    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 이미지 비율 유지
    const aspectRatio = img.width / img.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.width / aspectRatio;

    if (drawHeight > canvas.height) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * aspectRatio;
    }

    const offsetX = (canvas.width - drawWidth) / 2;
    const offsetY = (canvas.height - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };
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

window.onload = function () {
  showImage(currentImageIndex);
  document.getElementById("prevBtn").addEventListener("click", previousImage);
  document.getElementById("nextBtn").addEventListener("click", nextImage);
  document.getElementById("resetBtn").addEventListener("click", resetImages);
};
