module.exports = function(grunt) {

  grunt.config.set('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['src/**/*.{js,html}', 'public/*', '!public/assets/data'],
      tasks: [],
    },
    jshintrc: {
      files: ['**/.jshintrc'],
      tasks: ['jshint'],
    },
    tasks: {
      files: ['<%= jshint.tasks.src %>'],
      tasks: ['jshint:tasks'],
    },
    scripts: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint:app'],
    },
    jade: {
      files: 'jade/*.jade',
      tasks: ['jade:dev'],
    },
    assets: {
      files: ['assets/img/*', 'src/html/*'],
      tasks: ['copy']
    },
    styles: {
      files: 'styles/**/*.styl',
      tasks: ['stylus:dev'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
