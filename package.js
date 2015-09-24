Package.describe({
  name: 'pfafman:font-awesome-4',
  summary: "Font awesome packaged for meteor",
  version: "4.4.0_3",
  git: "https://github.com/pfafman/meteor-font-awesome-4.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.addFiles([
    'lib/css/font-awesome.css'
   ], 'client');

   api.addAssets([
    'lib/fonts/FontAwesome.otf',
    'lib/fonts/fontawesome-webfont.svg',
    'lib/fonts/fontawesome-webfont.woff',
    'lib/fonts/fontawesome-webfont.woff2',
    'lib/fonts/fontawesome-webfont.eot',
    'lib/fonts/fontawesome-webfont.ttf'
  ], 'client');
});


Package.onTest(function(api) {

});
