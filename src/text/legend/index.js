import images from './images';
import text from './text';

export default ['policy', 'info', 'change'].map((key) => ({
  src: images[key],
  text: text[key],
}));
