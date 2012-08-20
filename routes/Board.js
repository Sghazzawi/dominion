var boardClass = module.exports = function (id) {
    "use strict";
    this.id = id;
};

boardClass.prototype.addRegion = function (region) {
    "use strict";
    if (this.regions === undefined) {
        this.regions = {};
    }
    this.regions[region.id] = region;
};
