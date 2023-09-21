const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [
          "/thank-you",
          "/web-app-development-services-clutch",
          "/natural-language-processing-solutions-clutch",
          "/software-product-development-services-clutch",
          "/ai-product-development-clutch",
          "/product-development-abm",
          "/mobile-app-development-services-clutch",
          "/web-application-development-services-clutch",
          "/product-dev-services-designrush",
          "/product-development-manifest",
        ],
      },
    ],
  },

  transform: async (config, path) => {
    if (path.includes("/blog/")) {
      path = path.replace("/blog/", "/");
    }
    if (path.includes("/services/")) {
      path = path.replace("/services/", "/");
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
