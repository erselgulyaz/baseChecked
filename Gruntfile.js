module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		connect: {
			server: {
				options: {
					hostname: "localhost",
					port: 3000,
					base: "dev",
					livereload: true,
					open: true
				}
			}
		},
		less: {
			dev: {
				files: {
					"dev/assets/stylesheets/css/basechecked.css": "dev/assets/stylesheets/less/basechecked.less"
				},
				options: {
					dumpLineNumbers: "all"
				}
			},
			prod: {
				files: {
					"dev/assets/stylesheets/css/basechecked.css": "dev/assets/stylesheets/less/basechecked.less"
				},
				options: {
					compress: true
				}
			}
		},
		uglify: {
			dev: {
				files: {
					"dev/assets/js/basechecked.min.js": "dev/assets/js/basechecked.js"
				},
				options: {
					beautify: true
				}
			},
			prod: {
				files: {
					"dev/assets/js/basechecked.min.js": "dev/assets/js/basechecked.js"
				},
				options: {
					banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */\n"
				}
			}
		},
		watch: {
			files: {
				files: "dev/**/*.{html,css,js}",
				options: {
					livereload: true
				}
			},
			less: {
				files: "dev/**/*.less",
				tasks: ["less:dev"]
			},
			js: {
				files: "dev/**/*.js",
				tasks: ["newer:uglify:dev"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-newer");

	grunt.registerTask("default", ["connect", "watch"]);
	grunt.registerTask("prod", ["less:prod", "uglify:prod"]);
};