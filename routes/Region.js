var regionClass = module.exports = function (id, type, d, attributes) {
    "use strict";
    var region = {};
    region.id = id;
    region.type = type;
    region.d = d;
    region.attr = attributes;
    return region;
};
