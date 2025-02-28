export default function (config) {
  config.addGlobalData("layout", "layout.html");
  config.addPassthroughCopy("src/assets");

	config.addBundle('html')
}

export const config = {
  dir: {
    input: "src",
    output: "build",
    layouts: "_theme",
  },
};
