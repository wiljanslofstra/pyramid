import request from 'superagent';

export default (files, cb) => {
  const req = request
    .post('/upload.php')
    .accept('json');

  files.forEach((file) => {
    req.attach(file.name, file);
  });

  req.end((err, res) => {
    if (err) {
      return;
    }

    cb(res.body);
  });
};
