const images = [
  "https://raw.githubusercontent.com/macheecc/random-image-notion/main/Colossians_2_10.jpg",
  "https://raw.githubusercontent.com/macheecc/random-image-notion/main/Colossians_2_3.jpg",
  "https://raw.githubusercontent.com/macheecc/random-image-notion/main/Colossians_2_6.jpg",
  "https://raw.githubusercontent.com/macheecc/random-image-notion/main/Colossians_2_9.jpg"
];

// Generate a consistent random image per day
const date = new Date();
const seed = date.getFullYear() * 1000 + date.getMonth() * 100 + date.getDate();
const index = seed % images.length;

// Insert the image into the page
document.write(`<img src="${images[index]}" style="width:100%; border-radius:10px;">`);
