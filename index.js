import Jimp from 'jimp';

const font = await Jimp.loadFont(
  'https://i.pinimg.com/originals/2a/02/06/2a02060f84e3eb0a900386ed87788fa0.jpg',
);

const createMeme = () => {
  try {
    if (!fs.existsSync('./meme_folder')) {
      fs.mkdirSync('./meme_folder');
    }
  } catch (err) {
    console.error(err);
  }

  image.print(
    font,
    x,
    y,
    {
      text: 'Hello world!',
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
    },
    maxWidth,
    maxHeight,
  );
};
createMeme();
