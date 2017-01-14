/* global fetch */

export default (url, cb) => {
  const API_URL = 'https://noembed.com/embed?url=';

  fetch(`${API_URL}${url}`)
    .then(res => res.json())
    .then((body) => {
      cb(null, body);
    })
    .catch((err) => {
      cb(err);
    });
};
