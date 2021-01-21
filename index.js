const fs = require('fs');
const Jimp = require('jimp');

try {
  if (!fs.existsSync('./YourOwnMeme')) {
    fs.mkdirSync('./YourOwnMeme');
  }
} catch (err) {
  console.error(err);
}
const createMeme = async () => {
  const image = await Jimp.read(
    'https://i.pinimg.com/originals/2a/02/06/2a02060f84e3eb0a900386ed87788fa0.jpg',
  );
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const print = await image.print(font, 0, 0, 'Hello Meme');
  image.write('./YourOwnMeme/YourImage.png');
};
createMeme();
