/* global fetch */

export default (id, cb) => {
  fetch(`http://vimeo.com/api/v2/video/${id}.json`)
    .then(res => res.json())
    .then((data) => {
      if (typeof data === 'undefined' || !data.length) return;

      cb(null, data[0]);
    })
    .catch((err) => {
      cb(err);
    });
};
