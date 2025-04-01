const images = [
  "https://1drv.ms/i/s!At9wWw_9eJW9kLNtQLrKV7QMYDD8YA?e=AhckFa",
  "https://1drv.ms/i/s!At9wWw_9eJW9lLoOeMX1mjDWTHiWTA?e=o6KQw2",
  "https://1drv.ms/i/s!At9wWw_9eJW9lLoN3j_D-Ah4sspKMQ?e=dJurPB",
  "https://1drv.ms/i/s!At9wWw_9eJW9lLoExue3NOY2H78Z1A?e=VGFcH1"
];

// Generate a consistent random image per day
const date = new Date();
const seed = date.getFullYear() * 1000 + date.getMonth() * 100 + date.getDate();
const index = seed % images.length;

// Insert the image into the page
document.write(`<img src="${images[index]}" style="width:100%; border-radius:10px;">`);
