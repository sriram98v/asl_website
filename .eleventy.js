const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};

module.exports = function (eleventyConfig) {    
    eleventyConfig.addPassthroughCopy('assets');
};