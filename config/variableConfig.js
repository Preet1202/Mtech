// For live site
export const isProduction =
  process.env.NEXT_PUBLIC_NODE_ENVIRONMENT === "production";

// For staging site - test.marutitech.com
export const isStaging = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT === "staging";

// For local site
export const isDevelopment =
  process.env.NEXT_PUBLIC_NODE_ENVIRONMENT === "development";

export const siteUrl = isProduction
  ? "https://marutitech.com/"
  : isStaging
  ? "https://test.marutitech.com/"
  : "http://localhost:3000/";

export const gtmCode = isProduction ? "GTM-MX9KZ5Q" : "GTM-KRPC8JK";

export const googleSiteVerification =
  "m5paUvh011G69su80n6GgMOOi4w-YuRsbVFAyvf2mYY";

// Used in form submissions, to track user activity in google analytics
export const googleClientId = isProduction
  ? "a47328646w78567014p81233363"
  : "a47328646w294350267p255848070";

// api.ipfind API key-To get location from IP address in form submissions
export const ipFindApiKey = isProduction
  ? "aecf41ea-807a-4331-ac65-6312601296dc"
  : "def2074f-03ca-4516-ba1c-52aaef5005e3";

// Strapi url
export const strapiURL = "https://content.marutitech.com";

// Image CDN host
export const imageCDNHost = "https://cdn-gcp.new.marutitech.com";

export const previewSecret = "9quEPE3sGuTjIEPN";
