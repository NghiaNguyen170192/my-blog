export function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w\-]+/g, "")
		.replace(/\-\-+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "");
}

export function generateCategoryData(categories) {
	let categoryData = [];
	categories.forEach((category) => {
		categoryData.push({
			name: category,
			slug: `${generateSlug(category)}`,
		});
	});

	return categoryData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
}
