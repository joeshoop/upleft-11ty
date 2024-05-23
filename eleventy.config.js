module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addCollection("work", function(collection) {
    const coll = collection.getFilteredByTag("work");

    for (let i = 0; i < coll.length; i++) {
      const prevWork = coll[i - 1];
      const nextWork = coll[i + 1];
      const prevprevWork = coll[i - 2];

      coll[i].data["prevWork"] = prevWork;
      coll[i].data["nextWork"] = nextWork;
      coll[i].data["prevprevWork"] = prevprevWork;
    }

    return coll;
  });

  return {
    dir: {
      input: 'src',
      includes: "_includes"
    },
    templateFormats: [
      "liquid",
      "css",
      "jpg",
      "png",
      "svg",
      "mp4",
      "css",
      "js" // css is not yet a recognized template extension in Eleventy
    ]
  };
};