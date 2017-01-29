export default {
  defaultText: {
    title: 'Default text',
    schema: [
      {
        name: 'text',
        label: 'Content',
        type: 'text',
        placeholder: 'Your content',
        defaultValue: '',
      },
    ],
  },
  wysiwyg: {
    title: 'WYSIWYG',
    schema: [
      {
        name: 'text',
        label: 'Content',
        type: 'wysiwyg',
        placeholder: 'Your content',
        defaultValue: '',
      },
    ],
  },
  input: {
    title: 'Single input',
    schema: [
      {
        name: 'text',
        label: 'Input',
        type: 'input',
        placeholder: 'Your content',
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
  imageUpload: {
    title: 'Image',
    schema: [
      {
        name: 'files',
        label: 'Images',
        type: 'image',
        defaultValue: [],
      },
    ],
  },
  customTest: {
    title: 'Text block',
    schema: [
      {
        name: 'heading',
        label: 'Heading',
        type: 'input',
        placeholder: 'Your heading',
        defaultValue: '',
      }, {
        name: 'content',
        label: 'Content',
        type: 'text',
        placeholder: 'Your content',
        defaultValue: '',
      }, {
        name: 'files',
        label: 'Images',
        type: 'image',
        defaultValue: [],
      },
    ],
  },
};
