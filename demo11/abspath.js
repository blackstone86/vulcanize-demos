module.exports.compile = function(){
	var fs = require('fs');  
	var vulcan = require('../node_modules/vulcanize/lib/vulcan');
	var path = require('path');
	var dist = 'demo11/buildByVulanize.html';
	var inputPath = path.resolve('demo11/html/inline-styles.html');	

	function vulcanProcess(inputPath, cb, vulcanizeOptions) {
		var options = vulcanizeOptions || {};
		vulcan.setOptions(options);
		vulcan.process(inputPath, function(err, content) {
			if (err) {
				return cb(err);
			}
			cb(null, content);
		});
	}

	var root = path.resolve(inputPath, '../../../');
	var options = {
	    abspath: root,
	    inlineCss: true
	};
	var callback = function(err, content) {
		if (err) {
			process.stderr.write(require('util').inspect(err));
			process.exit(1);	    
		}
		var fd = fs.openSync(dist, 'w');
		fs.writeSync(fd, content + "\n");
		fs.closeSync(fd);
	};
	vulcanProcess('demo11/html/inline-styles.html', callback, options);
	// vulcanProcess('demo11/html/default.html', callback, options);
}