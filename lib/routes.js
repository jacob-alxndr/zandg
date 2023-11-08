/**
 * Link Resolver
 * This function determines the URL for a given Dato model.
 */
const linkResolver = (model) => {
  switch (model?._modelApiKey) {
    case "home":
      return "/";
    case "landing_page":
      return `${model?.slug}`;
    default:
      return "/";
  }
};

export default linkResolver;
