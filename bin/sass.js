var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Paths
var sassPath = path.resolve(__dirname, '../src/styles', 'core.scss');
var outputPath = path.resolve(__dirname, '../dist', 'main.css');
var mapPath = path.resolve(__dirname, '../src/static/styles', 'main.css.map');

// Options
var autoprefixerOptions = { browsers: ['last 2 version', 'ie >= 9', 'iOS >= 7', 'android >= 4.1'] };
var cssnanoOptions = { autoprefixer: false, discardComments: { removeAllButFirst: true } };

function postCSS(css) {
  return postcss([
    autoprefixer(autoprefixerOptions),
    cssnano(cssnanoOptions),
  ])
    .process(css, {
      from: outputPath,
      to: outputPath,
      map: { inline: false },
    })
    .then(function (result) {
      // Write CSS file
      fs.writeFile(outputPath, result.css, function(err) {
        if (err) {
          console.log(err);
        }
      });

      // Write sourcemap
      if (result.map) {
        fs.writeFileSync(mapPath, result.map);
      }
    });
}

const runSass = function() {
  sass.render({
    file: sassPath,
    outFile: outputPath,
  }, function(error, result) {
    if (!error) {
      // Run PostCSS
      postCSS(result.css);
    } else {
      console.log(error);
    }
  });
};

runSass();
