module.exports = function(grunt) {

  grunt.config.set('jshint', {
    tasks: {
      options: {
        jshintrc: '.jshintrc',
      },
      src: ['Gruntfile.js', 'tasks/**/*.js'],
    },
    app: {
      options: {
        jshintrc: 'src/.jshintrc',
      },
      src: ['src/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
