module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    vulcanize: {
      default: {
        options: {
          abspath: ''
        , inlineScripts: true
        , inlineCss: true
        , stripComments: true
        , redirects: [
            'chrome://imports/|demo09/html/imports/',
            'biz://cool/|demo09/html/'
          ]          
        }
      , files: {
          'demo01/buildByGrunt.html': 'demo01/html/inline-styles.html'
        , 'demo02/buildByGrunt.html': 'demo02/html/default.html'
        , 'demo03/buildByGrunt.html': 'demo03/html/external-script.html'
        , 'demo04/buildByGrunt.html': 'demo04/html/external-stylesheet.html'
        , 'demo05/buildByGrunt.html': 'demo05/html/default.html'
        , 'demo06/buildByGrunt.html': 'demo06/html/default.html'       
        , 'demo07/buildByGrunt.html': 'demo07/html/default.html'
        , 'demo08/buildByGrunt.html': 'demo08/html/default.html'
        , 'demo09/buildByGrunt.html': 'demo09/html/custom-protocol.html'
        , 'demo10/buildByGrunt.html': 'demo10/html/default.html'
        , 'demo11/buildByGrunt.html': 'demo11/html/inline-styles.html'
        , 'demo12/buildByGrunt.html': 'demo12/html/default.html'
        , 'demo13/buildByGrunt.html': 'demo13/html/xss.html'
        }
      }
    }
  })

  // Load the plugin that provides the "vulcanize" task.
  grunt.loadNpmTasks('grunt-vulcanize');

  // Default task(s).
  grunt.registerTask('default', ['vulcanize']);

};
