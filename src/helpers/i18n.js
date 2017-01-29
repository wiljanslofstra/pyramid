import en from '../languages/en';

export default {
  lang: 'en',

  languages: {
    en,
  },

  get(key) {
    if (typeof this.languages[this.lang] === 'undefined') {
      throw new Error('Language not available');
    }

    const lang = this.languages[this.lang];

    if (typeof lang[key] === 'undefined') {
      return key;
    }

    return lang[key];
  },
};
