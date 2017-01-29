import en from '../languages/en';
import nl from '../languages/nl';

export default {
  lang: 'en',

  languages: {
    en,
    nl,
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
