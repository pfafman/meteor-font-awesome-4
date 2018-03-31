Package.describe({
  name: 'pfafman:font-awesome-4',
  summary: "Font awesome packaged for meteor",
  version: "4.6.2",
  git: "https://github.com/pfafman/meteor-font-awesome-4.git"
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');

  api.addFiles([
    'font-awesome/css/font-awesome.css'
   ], 'client');

   api.addAssets([
    'font-awesome/fonts/FontAwesome.otf',
    'font-awesome/fonts/fontawesome-webfont.svg',
    'font-awesome/fonts/fontawesome-webfont.woff',
    'font-awesome/fonts/fontawesome-webfont.woff2',
    'font-awesome/fonts/fontawesome-webfont.eot',
    'font-awesome/fonts/fontawesome-webfont.ttf'
  ], 'client');
});


Package.onTest(function(api) {

});
