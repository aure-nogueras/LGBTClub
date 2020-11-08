module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'mochaTest': {
    	test: {
    		src: ['./src/HistoricalEvent/testHistoricalEventControllerMocha.js', './src/HistoricalEvent/testHistoricalEventMocha.js', './src/InfoAndExperiences/testInfoAndExperiencesControllerMocha.js', './src/InfoAndExperiences/testInfoAndExperiencesMocha.js', './src/UserManagement/testUserMocha.js', './src/UserManagement/testUserControllerMocha.js'],
    	},
    },
    'run': {
    	testHistoricalEvent: {
    		cmd: 'node',
		  	args: ['./src/HistoricalEvent/testHistoricalEvent.js'],
		 },
		 testHistoricalEventController: {
    		cmd: 'node',
		  	args: ['./src/HistoricalEvent/testHistoricalEventController.js'], 
		 },
		 testInfoAndExperiences: {
		 		cmd: 'node',
		 		args: ['./src/InfoAndExperiences/testInfoAndExperiences.js'],
		 },
		 testInfoAndExperiencesController: {
		 		cmd: 'node',
		 		args: ['./src/InfoAndExperiences/testInfoAndExperiencesController.js'],
		 },
		 testUser: {
		 		cmd: 'node',
		 		args: ['./src/UserManagement/testUser.js'],
		 },
		 testUserController: {
		 		cmd: 'node',
		 		args: ['./src/UserManagement/testUserController.js'],
		 },
		},
		'jshint': {
			all: ['./src/UserManagement/*.js', './src/HistoricalEvent/*.js', './src/InfoAndExperiences/*.js'],
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['mochaTest', 'run']);
  grunt.registerTask('lint', 'jshint');
};
