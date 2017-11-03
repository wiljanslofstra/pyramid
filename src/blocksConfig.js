export default {
  wysiwyg: {
    title: 'Tekst',
    schema: [
      {
        name: 'text',
        label: 'Content',
        type: 'wysiwyg',
        placeholder: '',
        defaultValue: '',
      },
    ],
  },
  defaultText: {
    title: 'Tekst',
    schema: [
      {
        name: 'text',
        label: 'Content',
        type: 'wysiwyg',
        placeholder: '',
        defaultValue: '',
      },
    ],
  },
  video: {
    title: 'Video',
    schema: [
      {
        name: 'url',
        label: 'Video URL',
        type: 'video',
        placeholder: 'Your video URL',
        defaultValue: '',
      },
    ],
  },
  slider: {
    title: 'Slider',
    schema: [
      {
        name: 'files',
        label: 'Afbeeldingen (bij voorkeur hetzelfde formaat)',
        type: 'image',
        defaultValue: [],
        uploadURL: '/upload.php',
      },
    ],
  },
  quote: {
    title: 'Quote',
    schema: [
      {
        name: 'heading',
        label: 'Quote kopje',
        type: 'input',
        defaultValue: 'Uitdaging',
      }, {
        name: 'content',
        label: 'Quote',
        type: 'wysiwyg',
        defaultValue: '',
      },
    ],
  },
  images: {
    title: 'Afbeeldingen',
    schema: [
      {
        name: 'files',
        label: 'Afbeeldingen (bij voorkeur hetzelfde formaat)',
        type: 'image',
        defaultValue: [],
        uploadURL: '/upload.php',
      },
    ],
  },
};
