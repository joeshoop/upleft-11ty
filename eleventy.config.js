const pluginBacklinks = require("./src/_11ty/backlinks.js")

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

  // Create a collection of all posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*.liquid");
  });

  // Create backlinks
  eleventyConfig.addCollection("backlinks", function(collectionApi) {
    let posts = collectionApi.getFilteredByGlob("*.liquid");
    let backlinks = {};

    // Initialize backlinks
    posts.forEach(post => {
      backlinks[post.url] = [];
    });

    // Populate backlinks
    posts.forEach(post => {
      let content = post.template.frontMatter.content;
      let links = content.match(/\[.*?\]\((.*?)\)/g) || [];

      links.forEach(link => {
        let url = link.match(/\((.*?)\)/)[1];
        if (backlinks[url]) {
          backlinks[url].push(post.url);
        }
      });
    });

    return backlinks;
  });

  return {
    dir: {
      input: 'src',
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: [
      "liquid",
      "md",
      "css",
      "js",
      "jpg",
      "png",
      "svg",
      "jpeg"
    ]
  };
};