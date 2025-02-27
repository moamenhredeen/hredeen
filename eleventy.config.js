
export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./assets");
};

export const config = {
	dir: {
		input: "content",
		output: "build"
	},
};
