var CSSComb = require('csscomb');
var path = require('path');

module.exports = function() {
    function CSScombProcessor(options) {
        this.configuration = options || 'csscomb';
    };

    CSScombProcessor.prototype = {
        process: function (css, extra) {
			var CONFIGS = ['csscomb', 'zen', 'yandex'];
			if(CONFIGS.indexOf(this.configuration) < 0) {
			var comb = new CSSComb(require(path.resolve(process.cwd(), this.configuration)));
			}
			else {
		    var comb = new CSSComb(this.configuration)
		    }
            css = comb.processString(css);
			return css;
        }
    };

    return CSScombProcessor;
};
