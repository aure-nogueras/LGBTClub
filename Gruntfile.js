module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'mochaTest': {
    	test: {
    		src: ['./src/HistoricalEvent/test/testHistoricalEventControllerMocha.js', './src/HistoricalEvent/test/testHistoricalEventMocha.js', './src/HistoricalEvent/test/testHistoricalEventRutas.js', './src/InfoAndExperiences/test/testInfoAndExperiencesControllerMocha.js', './src/InfoAndExperiences/test/testInfoAndExperiencesMocha.js', './src/InfoAndExperiences/test/testInfoAndExperiencesRutas.js', './src/UserManagement/test/testUserMocha.js', './src/UserManagement/test/testUserControllerMocha.js', './src/UserManagement/test/testUserRutas.js'],
    	},
    },
    'run': {
    	testHistoricalEvent: {
    		cmd: 'node',
		  	args: ['./src/HistoricalEvent/test/testHistoricalEvent.js'],
		 },
		 testHistoricalEventController: {
    		cmd: 'node',
		  	args: ['./src/HistoricalEvent/test/testHistoricalEventController.js'], 
		 },
		 testInfoAndExperiences: {
		 	cmd: 'node',
		 	args: ['./src/InfoAndExperiences/test/testInfoAndExperiences.js'],
		 },
		 testInfoAndExperiencesController: {
		 	cmd: 'node',
		 	args: ['./src/InfoAndExperiences/test/testInfoAndExperiencesController.js'],
		 },
		 testUser: {
		 	cmd: 'node',
		 	args: ['./src/UserManagement/test/testUser.js'],
		 },
		 testUserController: {
		 	cmd: 'node',
		 	args: ['./src/UserManagement/test/testUserController.js'],
		 },
		 email: {
		 	cmd: 'node',
		 	args: ['./src/main/mailController.js'],
		 },
		 server: {
		 	cmd: 'node',
		 	args: ['./src/UserManagement/recurso/UserRutasPortConfig.js'],
		 }
		},
		'jshint': {
			all: ['./src/UserManagement/modelo/*.js',
			'./src/UserManagement/recurso/*.js', './src/UserManagement/test/*.js', './src/HistoricalEvent/modelo/*.js', './src/HistoricalEvent/recurso/*.js', './src/HistoricalEvent/test/*.js', './src/InfoAndExperiences/modelo/*.js', './src/InfoAndExperiences/recurso/*.js', './src/InfoAndExperiences/test/*.js'],
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemailer');

  // Default task(s).
  grunt.registerTask('test', ['mochaTest', 'run:testHistoricalEvent', 'run:testHistoricalEventController', 'run:testInfoAndExperiences', 'run:testInfoAndExperiencesController', 'run:testUser', 'run:testUserController']);
  grunt.registerTask('email', 'run:email');
  grunt.registerTask('start', 'run:server');
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('build', 'Tarea build', function(){
  	grunt.log.writeln('Esta tarea tan solo devuelve un mensaje');
  });
  grunt.registerTask('install', 'Tarea install', function(){
  	grunt.log.writeln('Esta tarea tan solo devuelve un mensaje');
  });
  
};
