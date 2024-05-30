module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addCollection("work", function(collection) {
    const projects = collection.getFilteredByTag("work");

    for (let i = 0; i < projects.length; i++) {
      const prevWork = projects[i - 1];
      const nextWork = projects[i + 1];
      const prevprevWork = projects[i - 2];

      projects[i].data["prevWork"] = prevWork;
      projects[i].data["nextWork"] = nextWork;
      projects[i].data["prevprevWork"] = prevprevWork;
    }

    return projects;
  });

  return {
    dir: {
      input: 'src',
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: [
      "liquid",
      "css",
      "js"
    ]
  };
};