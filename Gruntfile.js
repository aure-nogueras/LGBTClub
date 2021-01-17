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

  // Default task(s).
  grunt.registerTask('test', ['mochaTest', 'run']);
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('build', 'Tarea build', function(){
  	grunt.log.writeln('Esta tarea tan solo devuelve un mensaje');
  });
  grunt.registerTask('run', 'Tarea run', function(){
  	grunt.log.writeln('Esta tarea tan solo devuelve un mensaje');
  });
  
};
