var CSSComb = require('csscomb');

module.exports = function() {
    function CSScombProcessor(options) {
        this.configuration = options || 'csscomb';
    };

    CSScombProcessor.prototype = {
        process: function (css, extra) {
			var comb = new CSSComb(this.configuration);
            css = comb.processString(css);
			return css;
        }
    };

    return CSScombProcessor;
};
