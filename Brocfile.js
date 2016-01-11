var vulcanize = require('broccoli-vulcanize');
var mergeTrees = require('broccoli-merge-trees');

var buildHtml = function(inputTree, fileName, outputUrl){
	var options = {
	  input: fileName
	, output: outputUrl
	, abspath: ''
	, inlineScripts: true
	, inlineCss: true
	, stripComments: true
	, redirects: [
	    'chrome://imports/|demo09/html/imports/',
	    'biz://cool/|demo09/html/'
	  ]          
	};	
	return vulcanize(inputTree, options);
}
var demo01 = buildHtml('demo01/html', 'inline-styles.html', 'demo01/inline-styles.html');
var demo02 = buildHtml('demo02/html', 'default.html', 'demo02/default.html');
var demo03 = buildHtml('demo03/html', 'external-script.html', 'demo03/external-script.html');
var demo04 = buildHtml('demo04/html', 'external-stylesheet.html', 'demo04/external-stylesheet.html');
var demo05 = buildHtml('demo05/html', 'default.html', 'demo05/default.html');
var demo06 = buildHtml('demo06/html', 'default.html', 'demo06/default.html');
var demo07 = buildHtml('demo07/html', 'default.html', 'demo07/default.html');
var demo08 = buildHtml('demo08/html', 'default.html', 'demo08/default.html');
// var demo09 = buildHtml('demo09/html', 'custom-protocol.html', 'demo09/custom-protocol.html');
var demo10 = buildHtml('demo10/html', 'default.html', 'demo10/default.html');
var demo11 = buildHtml('demo11/html', 'inline-styles.html', 'demo11/inline-styles.html');
var demo12 = buildHtml('demo12/html', 'default.html', 'demo12/default.html');
var demo13 = buildHtml('demo13/html', 'xss.html', 'demo13/xss.html');
module.exports = mergeTrees([demo01,demo02,demo03,demo04,demo05,demo06,demo07,demo08,demo10,demo11,demo12,demo13]);

