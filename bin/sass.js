var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Options
var autoprefixerOptions = { browsers: ['last 2 version', 'ie >= 9', 'iOS >= 7', 'android >= 4.1'] };
var cssnanoOptions = { autoprefixer: false, discardComments: { removeAllButFirst: true } };

function postCSS(css, file) {
  return postcss([
    autoprefixer(autoprefixerOptions),
    cssnano(cssnanoOptions),
  ])
    .process(css, {
      from: file.outputPath,
      to: file.outputPath,
      map: { inline: false },
    })
    .then(function (result) {
      // Write CSS file
      fs.writeFile(file.outputPath, result.css, function(err) {
        if (err) {
          console.log(err);
        }
      });

      // Write sourcemap
      if (result.map) {
        fs.writeFileSync(file.mapPath, result.map);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

const runSass = function() {
  var files = [
    {
      sassPath: path.resolve(__dirname, '../src/styles', 'core.scss'),
      outputPath: path.resolve(__dirname, '../dist', 'main.css'),
      mapPath: path.resolve(__dirname, '../dist', 'main.css.map'),
    }, {
      sassPath: path.resolve(__dirname, '../src/styles', 'editor.scss'),
      outputPath: path.resolve(__dirname, '../dist', 'editor.css'),
      mapPath: path.resolve(__dirname, '../dist', 'editor.css.map'),
    },
  ];

  files.forEach(function(file) {
    sass.render({
      file: file.sassPath,
      outFile: file.outputPath,
    }, function(error, result) {
      if (!error) {
        // Run PostCSS
        postCSS(result.css, file);
      } else {
        console.log(error);
      }
    });
  });
};

runSass();
