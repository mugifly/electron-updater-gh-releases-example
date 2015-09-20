module.exports = function(grunt) {

	// Configurations
	grunt.initConfig({
		// Read the package.json
		pkg: grunt.file.readJSON('package.json'),

		// grunt-electron
		electron: {
			linux32: {
				options: {
					name: 'example',
					dir: '.',
					out: 'dist',
					ignore: '(dist/|node_modules/grunt.*|\.git.*|Gruntfile\.js)',
					version: '0.29.2',
					platform: 'linux',
					arch: 'ia32',
					overwrite: true
				}
			},
			linux64: {
				options: {
					name: 'example',
					dir: '.',
					out: 'dist',
					ignore: '(dist/|node_modules/grunt.*|\.git.*|Gruntfile\.js)',
					version: '0.29.2',
					platform: 'linux',
					arch: 'x64',
					overwrite: true
				}
			},
			win32: {
				options: {
					name: 'example',
					dir: '.',
					out: 'dist',
					ignore: '(dist/|node_modules/grunt.*|\.git.*|Gruntfile\.js)',
					version: '0.29.2',
					platform: 'win32',
					arch: 'ia32',
					overwrite: true
				}
			}
		}

	});

	// Load tasks
	grunt.loadNpmTasks('grunt-electron');

	// Register tasks
	grunt.registerTask('default', ['electron']);

};
