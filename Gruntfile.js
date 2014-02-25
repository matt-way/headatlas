// Churn.TV grunt file
'use strict';

//var pause = require("grunt-pause");

module.exports = function (grunt) {
	//pause.init(grunt);
  
	// path aliases
	var haConfig = {
		dev: 'public/',			
	};

	grunt.initConfig({
		// set vars
		vars: haConfig,
		// prepare the html files for usemin
		useminPrepare: {
			html: ['<%= vars.dev %>index.html'],
			options: {
				dest: '<%= vars.dev %>'
			}
		},
		// usemin
		usemin: {
			html: '<%= vars.dev %>index.html'			
		}		
	});

  	// load contrib plugins
  	grunt.loadNpmTasks('grunt-contrib');
  	grunt.loadNpmTasks('grunt-usemin');  	

  	// setup tasks
  	grunt.registerTask('release', [  		  		
  		'useminPrepare',  		  		
  		'concat',		
		'cssmin',		
  		'usemin'  		
  	]);  	
};
