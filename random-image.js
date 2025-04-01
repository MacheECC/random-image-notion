const images = [
  "https://drive.google.com/uc?export=view&id=1sa12qnkMZ8-AMr1pWjffFJe-pZNft_tp",
  "https://drive.google.com/uc?export=view&id=16jDTrW1-cIc0IYbaBOZyV6VRqj4pZq1C",
  "https://drive.google.com/uc?export=view&id=1P0JYZDQIuFZGXlZD04p82VBQ2Ku0wAj9",
  "https://drive.google.com/uc?export=view&id=1BxwHsoZqGDswkhJ7do28rO5iyVVAb9gj"
];

// Generate a consistent random image per day
const date = new Date();
const seed = date.getFullYear() * 1000 + date.getMonth() * 100 + date.getDate();
const index = seed % images.length;

// Insert the image into the page
document.write(`<img src="${images[index]}" style="width:100%; border-radius:10px;">`);
