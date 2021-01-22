const fs = require('fs');
const Jimp = require('jimp');

// https://i.pinimg.com/originals/2a/02/06/2a02060f84e3eb0a900386ed87788fa0.jpg

const createMeme = async () => {
  const url = process.argv[2];

  let top = '';
  let bottom = '';

  if (process.argv[3]) {
    top = process.argv[3].split('.').join(' ');
  }
  if (process.argv[4]) {
    bottom = process.argv[4].split('.').join(' ');
  }

  // const top = process.argv[3].split('.').join(' ');

  // const bottom = process.argv[4].split('.').join(' ');

  const image = await Jimp.read(url);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const print = await image.print(font, 510, 0, top);
  const print2 = await image.print(font, 0, 350, bottom);

  image.write('./YourOwnMeme/YourImage.png');
};
createMeme();
