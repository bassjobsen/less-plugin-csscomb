var getCSScombProcessor = require("./csscomb-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginCSScomb(options) {
    this.options = options;
};

LessPluginCSScomb.prototype = {
    install: function(less, pluginManager) {
        var CSScombProcessor = getCSScombProcessor(less);
        pluginManager.addPostProcessor(new CSScombProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 0, 0]
};

module.exports = LessPluginCSScomb;
