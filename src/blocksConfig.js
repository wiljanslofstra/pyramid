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
  twocols: {
    title: 'Twee kolommen',
    schema: [
      {
        name: 'title_one',
        label: 'Koptekst kolom 1',
        type: 'input',
        defaultValue: '',
      }, {
        name: 'text_one',
        label: 'Content kolom 1',
        type: 'wysiwyg',
        placeholder: '',
        defaultValue: '',
      }, {
        name: 'title_two',
        label: 'Koptekst kolom 2',
        type: 'input',
        defaultValue: '',
      }, {
        name: 'text_two',
        label: 'Content kolom 2',
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
        label: 'Video URL (YouTube of Vimeo)',
        type: 'video',
        placeholder: 'YouTube of Vimeo URL',
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
      },
    ],
  },
  fullImage: {
    title: 'Volledige breedte afbeelding',
    schema: [
      {
        name: 'files',
        label: 'Afbeelding (bij voorkeur: 1400px x 700px)',
        type: 'image',
        defaultValue: [],
      },
      {
        name: 'content',
        label: 'Content',
        type: 'wysiwyg',
        defaultValue: '',
      },
    ],
  },
  readMore: {
    title: 'Lees ook',
    schema: [
      {
        name: 'input',
        label: 'Zoek artikel',
        type: 'autocomplete',
        defaultValue: '',
        api: '/admin/article/find',
      },
    ],
  },
  entries: {
    title: 'Foto wedstrijd',
    schema: [
      {
        name: 'input',
        label: 'Wedstrijd zoeken',
        type: 'autocomplete',
        defaultValue: '',
        api: '/admin/competition/find',
      },
    ],
  },
  imageLeft: {
    title: 'Afbeelding links + tekst',
    schema: [
      {
        name: 'files',
        label: 'Afbeelding',
        type: 'image',
        defaultValue: [],
      }, {
        name: 'content',
        label: 'Content',
        type: 'wysiwyg',
        defaultValue: '',
      },
    ],
  },
  imageRight: {
    title: 'Afbeelding rechts + tekst',
    schema: [
      {
        name: 'files',
        label: 'Afbeelding',
        type: 'image',
        defaultValue: [],
      }, {
        name: 'content',
        label: 'Content',
        type: 'wysiwyg',
        defaultValue: '',
      },
    ],
  },
  image: {
    title: 'Enkele afbeelding',
    schema: [
      {
        name: 'files',
        label: 'Afbeelding',
        type: 'image',
        defaultValue: [],
      },
    ],
  },
  callToAction: {
    title: 'Call to action',
    schema: [
      {
        name: 'title',
        label: 'Koptekst',
        type: 'input',
        defaultValue: '',
      },
      {
        name: 'content',
        label: 'Content',
        type: 'wysiwyg',
        defaultValue: '',
      },
      {
        name: 'btn_text',
        label: 'Knop tekst',
        type: 'input',
        defaultValue: '',
      },
      {
        name: 'btn_url',
        label: 'Knop URL',
        type: 'input',
        defaultValue: '',
      },
    ],
  },
  personQuote: {
    title: 'Quote met persoon',
    schema: [
      {
        name: 'files',
        label: 'Afbeelding',
        type: 'image',
        defaultValue: [],
      }, {
        name: 'content',
        label: 'Quote tekst',
        type: 'wysiwyg',
        defaultValue: '',
      }, {
        name: 'author',
        label: 'Quote auteur',
        type: 'input',
        defaultValue: '',
      },
    ],
  },
};
