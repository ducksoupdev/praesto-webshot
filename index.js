var webshot = require("webshot"),
  parallel = require("async/parallel"),
  config = require("./config");

var sitesToGenerate = [];

for (var i = 0; i < config.sites.length; i++) {
  var site = config.sites[i];
  sitesToGenerate.push(function (callback) {
    webshot(site.url, site.saveTo, site.options, callback);
  });
}

parallel(sitesToGenerate, function (err) {
  if (err) {
    console.error(err);
  }
});