module.exports = function(grunt) {

  grunt.config.set('requirejs', {
    options: {
      baseUrl: '.',
      paths: {
        'js': 'src',
        'main': 'src/main'
      },
      mainConfigFile: 'src/requirejs-config.js',
      insertRequire: ['main'],
      // name: 'lib/almond/almond',
      name : 'lib/requirejs/require',
      optimize: 'uglify2',
      generateSourceMaps: true,
      preserveLicenseComments: false,
    },

    'public': {
      options: {
        out: 'public/app.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

};
