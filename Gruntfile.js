
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
	        port: 9001,
	        base: 'src',
	        keepalive:true
	      }
	    }
	  },
	less: {
		dev: {
			files: [

				{ src: ['**/screen.less'], dest: 'src/css/min/', expand: true, cwd: 'src/css', ext:'.css'}
			],
			options: {
				//paths: ["assets/css"],
				
			},
		}
	},
	watch: {
        files: "./src/css/**/*",
        tasks: ["less"]
    }	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server',['connect']);
  
  // Default task(s).
  grunt.registerTask('default', ['uglify','less', 'connect']);

};