import DefaultText from './DefaultText';
import Wysiwyg from './Wysiwyg';
import Input from './Input';
import Video from './Video';
import ImageUpload from './ImageUpload';

export default {
  defaultText: {
    title: 'Default text',
    element: DefaultText,
  },
  wysiwyg: {
    title: 'WYSIWYG',
    element: Wysiwyg,
  },
  input: {
    title: 'Single input',
    element: Input,
  },
  video: {
    title: 'Video',
    element: Video,
  },
  imageUpload: {
    title: 'Image',
    element: ImageUpload,
  },
};
