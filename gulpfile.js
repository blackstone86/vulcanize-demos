var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
 
var buildHtml = function(src,dest){
	gulp.src(src)
	  .pipe(vulcanize({
		      abspath: ''
		    , inlineScripts: true
		    , inlineCss: true
		    , stripComments: true
		    , redirects: [
		        'chrome://imports/|demo09/html/imports/',
		        'biz://cool/|demo09/html/'
		      ] 			
			}))
	  .pipe(gulp.dest(dest))
}
gulp.task('default', function () {	
	buildHtml('demo01/html/inline-styles.html','demo01/buildByGulp');
	buildHtml('demo02/html/default.html','demo02/buildByGulp');
	buildHtml('demo03/html/external-script.html','demo03/buildByGulp');
	buildHtml('demo04/html/external-stylesheet.html','demo04/buildByGulp');
	buildHtml('demo05/html/default.html','demo05/buildByGulp');
	buildHtml('demo06/html/default.html','demo06/buildByGulp');
	buildHtml('demo07/html/default.html','demo07/buildByGulp');
	buildHtml('demo08/html/default.html','demo08/buildByGulp');
	buildHtml('demo09/html/custom-protocol.html','demo09/buildByGulp');
	buildHtml('demo10/html/default.html','demo10/buildByGulp');
	buildHtml('demo11/html/inline-styles.html','demo11/buildByGulp');
	buildHtml('demo12/html/default.html','demo12/buildByGulp');
	buildHtml('demo13/html/xss.html','demo13/buildByGulp');
});	
