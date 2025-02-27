export default function (config) {
  config.addGlobalData("layout", "layout.html");
  config
    .addPassthroughCopy({ "**/*.css": "/" })
    .addPassthroughCopy({ "**/*.otf": "/" })
    .addPassthroughCopy({ "**/*.ttf": "/" })
    .addPassthroughCopy("**/*.png");
}

export const config = {
  dir: {
    input: "src",
    output: "build",
    layouts: "_theme",
  },
};
