module.exports = function(collection) {
	let backlinks = {};

	collection.getAll().forEach(page => {
		let pageUrl = page.url;

		// Iterate through all other pages to find links
		collection.getAll().forEach(otherPage => {
			if (otherPage.url !== pageUrl) {
				let content = otherPage.templateContent;

				// Check if the content contains a link to the current page
				if (content && content.includes(pageUrl)) {
					if (!backlinks[pageUrl]) {
						backlinks[pageUrl] = [];
					}

					backlinks[pageUrl].push({
						title: otherPage.data.title,
						url: otherPage.url
					});
				}
			}
		});
	});

	return backlinks;
};