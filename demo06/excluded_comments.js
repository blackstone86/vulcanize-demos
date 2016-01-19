module.exports.compile = function(){
	var fs = require('fs');
	var vulcan = require('../node_modules/vulcanize/lib/vulcan');
	var path = require('path');
	var dist = 'demo06/buildByVulanize.html';
	var inputPath = path.resolve('demo06/html/default.html');	

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

	var options = {
		stripComments: true
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
	vulcanProcess(inputPath, callback, options);
}