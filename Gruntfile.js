module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	uglify: {
		options: {
		  banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},
      my_target: {
        files: {
          'build/FizzBuzz.min.js': ['src/FizzBuzz.js']
        }
      }
	},
	jshint: {
		all: ['src/*.js', 'spec/*.js']
	},
	jasmine: {
		pivotal: {
		  src: 'src/*.js',
		  options: {
			specs: 'spec/*Spec.js',
			helpers: 'spec/*Helper.js'
		  }
		}
	  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'jasmine']);

};