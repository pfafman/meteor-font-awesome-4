Package.describe({
  summary: "Font awesome packaged for meteor",
  version: "4.2.0_1",
  git: "https://github.com/pfafman/meteor-font-awesome-4.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles([
    'lib/css/font-awesome.css',
    'lib/fonts/FontAwesome.otf',
    'lib/fonts/fontawesome-webfont.svg',
    'lib/fonts/fontawesome-webfont.woff',
    'lib/fonts/fontawesome-webfont.eot',
    'lib/fonts/fontawesome-webfont.ttf'
  ], 'client');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pfafman:bootstrap-3');
  api.addFiles([
    'lib/css/font-awesome.css',
    'lib/fonts/FontAwesome.otf',
    'lib/fonts/fontawesome-webfont.svg',
    'lib/fonts/fontawesome-webfont.woff',
    'lib/fonts/fontawesome-webfont.eot',
    'lib/fonts/fontawesome-webfont.ttf'
  ], 'client');
});
