module.exports = function (eleventyConfig) {    
    eleventyConfig.addPassthroughCopy('assets');
    return {
        pathPrefix: "/asl_website/"
      }
};