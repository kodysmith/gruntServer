
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    connect: {
	    server: {
	      options: {
	        port: 80,
	        base: 'src',
	        keepalive:true
	      }
	    }
	  },
	sass: {
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: 
      [{
        expand: true,
        cwd: 'css/scss',
        src: ['*.scss'],
        dest: '/dev',
        ext: '.css'
      }]
    }
	},
	watch: {
        files: "./src/css/**/*",
        tasks: ["sass"]
    }	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server',['connect']);
  grunt.registerTask('compile',['watch']);
  // Default task(s).
  grunt.registerTask('default', ['uglify','sass', 'connect']);

};
