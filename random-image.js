const images = [
  "https://drive.google.com/file/d/1sa12qnkMZ8-AMr1pWjffFJe-pZNft_tp/view?usp=share_link",
  "https://drive.google.com/file/d/16jDTrW1-cIc0IYbaBOZyV6VRqj4pZq1C/view?usp=share_link",
  "https://drive.google.com/file/d/1P0JYZDQIuFZGXlZD04p82VBQ2Ku0wAj9/view?usp=share_link",
  "https://drive.google.com/file/d/1BxwHsoZqGDswkhJ7do28rO5iyVVAb9gj/view?usp=share_link"
];

// Generate a consistent random image per day
const date = new Date();
const seed = date.getFullYear() * 1000 + date.getMonth() * 100 + date.getDate();
const index = seed % images.length;

// Insert the image into the page
document.write(`<img src="${images[index]}" style="width:100%; border-radius:10px;">`);
