const imageList = ['0.jpeg','1.jpeg','2.jpeg'];

const currentImage = imageList[Math.floor(Math.random() * imageList.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${currentImage}`;

document.body.appendChild(bgImage);

