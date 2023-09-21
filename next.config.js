const webpack = require("webpack");
module.exports = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  trailingSlash: true,
  optimizeFonts: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/webp"],
    domains: [
      "storage.googleapis.com",
      "cdn-gcp.marutitech.com",
      "localhost",
      "marutitech.com",
      "cdn-gcp.new.marutitech.com",
      "assets.goodfirms.co",
    ],
    path: "/_next/image/",
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
  staticPageGenerationTimeout: 180,
  // basePath: "/",
  // assetPrefix: "https://cdn-gcp.new.marutitech.com",
  async redirects() {
    const redirecting_url = [
      "/what-is-a-citizen-developer/",
      "/mobile-application-development-trends/",
      "/heres-need-know-chatbots/embed/",
      "/trends-chatbot/",
      "/7-reasons-why-business-needs-chatbot/",
      "/traits-good-chatbot/",
      "/design-chatbot-conversation/",
      "/chatbots-and-service-industry/",
      "/what-chatbots-can-do-for-e-commerce-industry/",
      "/chatbot-for-hotels/",
      "/heres-need-know-chatbots/",
      "/nlp-whatsapp-chatbot-dialogflow/_wp_link_placeholder/",
      "/cognitive-computing-features-scope/",
      "/decops-consulting-services/",
      "/software-engineering-services/",
      // "/hire-python-developers/",
      "/rpa-consultants/",
      "/robotic-process-automation-back-office/",
      "/cloud-based-application-development-services/",
      "/devops-business-services/",
      "/build-a-chatbot-usingdialogflow/",
      "/ways-ai-transforming-finance/Asglobaltechnologyhasevolvedovertheyears/",
      // "/rapid-application-development-tools/",
      "/chatbots-in-real-estate/Genuine/",
      "/guide-to-component-based-architecture-can-help-scale/feed/",
      "/conversational-uibusiness-communication/",
      "/ai-blockchain-and-iot-inclaims-management-process/",
      "/cognitive-computing-features-scopelimitations/",
      "/chatbotswork-guide-chatbot-architecture/",
      "/heres-need-know-chatbotsl/",
    ];

    // Currently not in use by marketing team
    // const redirectResponse = await fetch(
    //   "https://content.marutitech.com/api/redirect?populate=RedirectField"
    // );
    // const redirectData = await redirectResponse.json();
    // const RedirectDataFields =
    //   redirectData?.data?.attributes?.RedirectField?.map((redirectData) => {
    //     if (redirectData !== "") {
    //       return {
    //         source: `${redirectData?.Source}`,
    //         destination: redirectData?.Destination,
    //         permanent: false,
    //       };
    //     }
    //   }).filter((data) => data !== undefined);
    // console.log(RedirectDataFields);

    const response = await fetch(
      "https://content.marutitech.com/api/resources?filters[slug][$eq]=blog&populate=container_box"
    );
    const dt = await response.json();
    dt.data;
    const result = dt.data[0].attributes.container_box
      .map((container_box) => {
        if (container_box.link_url !== "") {
          return {
            source: `/blog${container_box.link_url}`,
            destination: container_box.link_url,
            permanent: false,
          };
        }
      })
      .filter((data) => data !== undefined);

    const finaldata = result.filter((data) => {
      if (!redirecting_url.includes(data.source)) {
        // console.log(data.source);
        return data;
      }
    });
    return [
      {
        source: "/home/",
        destination: "/",
        permanent: false,
      },
      //10 old service pages
      {
        source: "/services/machine-learning-services/",
        destination: "/machine-learning-services/",
        permanent: true,
      },
      {
        source: "/services/computer-vision-services/",
        destination: "/computer-vision-services/",
        permanent: true,
      },
      {
        source: "/services/cloud-application-development-services/",
        destination: "/cloud-application-development-services/",
        permanent: true,
      },
      {
        source: "/services/devops-consulting-services/",
        destination: "/devops-consulting-services/",
        permanent: true,
      },
      {
        source: "/services/quality-engineering-services/",
        destination: "/quality-engineering-services/",
        permanent: true,
      },
      {
        source: "/services/software-prototyping-services/",
        destination: "/software-prototyping-services/",
        permanent: true,
      },
      {
        source: "/services/data-analytics-services/",
        destination: "/data-analytics-services/",
        permanent: true,
      },
      {
        source: "/services/business-intelligence-consulting-services/",
        destination: "/business-intelligence-consulting-services/",
        permanent: true,
      },
      {
        source: "/services/robotic-process-automation-services/",
        destination: "/robotic-process-automation-services/",
        permanent: true,
      },
      {
        source: "/services/bot-development-services/",
        destination: "/bot-development-services/",
        permanent: true,
      },
      //NLP - new service page
      {
        source: "/natural-language-processing-solutions/",
        destination: "/natural-language-processing-services/",
        permanent: true,
      },
      //blogs, authors & others
      {
        source: "/what-is-a-citizen-developer/",
        destination: "/citizen-developer-framework/",
        permanent: false,
      },
      {
        source: "/mobile-application-development-trends/",
        destination: "/7-trends-of-mobile-application-development/",
        permanent: false,
      },
      {
        source: "/heres-need-know-chatbots/embed/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/trends-chatbot/",
        destination: "/chatbot-trends/",
        permanent: false,
      },
      {
        source: "/7-reasons-why-business-needs-chatbot/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/traits-good-chatbot/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/design-chatbot-conversation/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/chatbots-and-service-industry/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/what-chatbots-can-do-for-e-commerce-industry/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/chatbot-for-hotels/",
        destination: "/hotel-industry-ai-awesome-user-experience/",
        permanent: false,
      },
      {
        source: "/heres-need-know-chatbots/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/nlp-whatsapp-chatbot-dialogflow/_wp_link_placeholder/",
        destination: "/nlp-whatsapp-chatbot-dialogflow/",
        permanent: false,
      },
      {
        source: "/nlp-whatsapp-chatbot-dialogflow/_wp_link_placeholder/",
        destination: "/nlp-whatsapp-chatbot-dialogflow/",
        permanent: false,
      },
      {
        source: "/cognitive-computing-features-scope/",
        destination: "/cognitive-computing-features-scope-limitations/",
        permanent: false,
      },
      {
        source: "/decops-consulting-services/",
        destination: "/devops-consulting-services/",
        permanent: false,
      },
      {
        source: "/software-engineering-services/",
        destination: "/",
        permanent: false,
      },
      // {
      //   source: "/hire-python-developers/",
      //   destination: "/",
      //   permanent: false,
      // },
      {
        source: "/rpa-consultants/",
        destination: "/robotic-process-automation-services/",
        permanent: false,
      },
      {
        source: "/robotic-process-automation-back-office/",
        destination: "/robotic-process-automation-services/",
        permanent: false,
      },
      {
        source: "/cloud-based-application-development-services/",
        destination: "/cloud-application-development-services/",
        permanent: false,
      },
      {
        source: "/devops-business-services/",
        destination: "/devops-consulting-services/",
        permanent: false,
      },
      {
        source: "/author/shikha/page/2/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/author/shikha/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/author/mirant/page/2/",
        destination: "/author/mirant-hingrajia/",
        permanent: false,
      },
      {
        source: "/build-a-chatbot-usingdialogflow/",
        destination: "/build-a-chatbot-using-dialogflow/",
        permanent: false,
      },
      {
        source: "/build-a-chatbot-usingdialogflow/",
        destination: "/build-a-chatbot-using-dialogflow/",
        permanent: false,
      },
      {
        source:
          "/ways-ai-transforming-finance/Asglobaltechnologyhasevolvedovertheyears/",
        destination: "/ways-ai-transforming-finance/",
        permanent: false,
      },
      // {
      //   source: "/rapid-application-development-tools/",
      //   destination: "/rapid-application-development-tools/",
      //   permanent: false,
      // },
      {
        source: "/chatbots-in-real-estate/Genuine/",
        destination: "/chatbots-in-real-estate/",
        permanent: false,
      },
      {
        source: "/guide-to-component-based-architecture-can-help-scale/feed/",
        destination: "/guide-to-component-based-architecture/",
        permanent: false,
      },
      {
        source: "/conversational-uibusiness-communication/",
        destination: "/conversational-ui-business-communication/",
        permanent: false,
      },
      {
        source: "/ai-blockchain-and-iot-inclaims-management-process/",
        destination: "/ai-blockchain-and-iot-in-claims-management-process/",
        permanent: false,
      },
      {
        source: "/cognitive-computing-features-scopelimitations/",
        destination: "/cognitive-computing-features-scope-limitations/",
        permanent: false,
      },
      {
        source: "/author/vijay/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/chatbotswork-guide-chatbot-architecture/",
        destination: "/chatbots-work-guide-chatbot-architecture/",
        permanent: false,
      },
      {
        source: "/author/amit/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/heres-need-know-chatbotsl/",
        destination: "/complete-guide-chatbots/",
        permanent: false,
      },
      {
        source: "/blockchain-benefits/",
        destination: "/benefits-of-blockchain/",
        permanent: false,
      },
      {
        source: "/bot-development/",
        destination: "/bot-development-services/",
        permanent: false,
      },
      {
        source: "/category/artificial-intelligence/",
        destination: "/blog/",
        permanent: false,
      },
      ...finaldata,
      // ...RedirectDataFields,
    ];
  },
  async rewrites() {
    const redirecting_url = [
      "/what-is-a-citizen-developer/",
      "/mobile-application-development-trends/",
      "/heres-need-know-chatbots/embed/",
      "/trends-chatbot/",
      "/7-reasons-why-business-needs-chatbot/",
      "/traits-good-chatbot/",
      "/design-chatbot-conversation/",
      "/chatbots-and-service-industry/",
      "/what-chatbots-can-do-for-e-commerce-industry/",
      "/chatbot-for-hotels/",
      "/heres-need-know-chatbots/",
      "/nlp-whatsapp-chatbot-dialogflow/_wp_link_placeholder/",
      "/cognitive-computing-features-scope/",
      "/decops-consulting-services/",
      "/software-engineering-services/",
      // "/hire-python-developers/",
      "/rpa-consultants/",
      "/robotic-process-automation-back-office/",
      "/cloud-based-application-development-services/",
      "/devops-business-services/",
      "/build-a-chatbot-usingdialogflow/",
      "/ways-ai-transforming-finance/Asglobaltechnologyhasevolvedovertheyears/",
      // "/rapid-application-development-tools/",
      "/chatbots-in-real-estate/Genuine/",
      "/guide-to-component-based-architecture-can-help-scale/feed/",
      "/conversational-uibusiness-communication/",
      "/ai-blockchain-and-iot-inclaims-management-process/",
      "/cognitive-computing-features-scopelimitations/",
      "/chatbotswork-guide-chatbot-architecture/",
      "/heres-need-know-chatbotsl/",
    ];
    const response = await fetch(
      "https://content.marutitech.com/api/resources?filters[slug][$eq]=blog&populate=container_box"
    );
    const dt = await response.json();
    // console.log(dt.data[0].attributes.container_box[17].link_url);
    dt.data;
    const result = dt.data[0].attributes.container_box
      .map((container_box) => {
        if (container_box.link_url !== "") {
          return {
            source: container_box.link_url,
            destination: `/blog${container_box.link_url}`,
          };
        }
      })
      .filter((data) => data !== undefined);

    const finaldata = result.filter((data) => {
      if (!redirecting_url.includes(data.source)) {
        // console.log(data.source);
        return data;
      }
    });

    // console.log(finaldata);
    // if (!redirecting_url.includes(data.source)) {
    //   console.log(data.source);

    //   return data;
    // }
    // });
    // const resultdata = finaldata.filter((data) => data !== undefined);
    // console.log(resultdata.source);
    return [
      {
        source: "/bot-development-services/",
        destination: "/services/bot-development-services/",
      },
      {
        source: "/robotic-process-automation-services/",
        destination: "/services/robotic-process-automation-services/",
      },
      {
        source: "/business-intelligence-consulting-services/",
        destination: "/services/business-intelligence-consulting-services/",
      },
      {
        source: "/data-analytics-services/",
        destination: "/services/data-analytics-services/",
      },
      {
        source: "/natural-language-processing-services/",
        destination: "/services/natural-language-processing-services/",
      },
      {
        source: "/computer-vision-services/",
        destination: "/services/computer-vision-services/",
      },
      {
        source: "/machine-learning-services/",
        destination: "/services/machine-learning-services",
      },
      {
        source: "/cloud-application-development-services/",
        destination: "/services/cloud-application-development-services/",
      },
      {
        source: "/devops-consulting-services/",
        destination: "/services/devops-consulting-services/",
      },
      {
        source: "/quality-engineering-services/",
        destination: "/services/quality-engineering-services/",
      },
      {
        source: "/software-prototyping-services/",
        destination: "/services/software-prototyping-services/",
      },
      {
        source: "/demo-data-engineering/",
        destination: "/services/demo-data-engineering/",
      },

      {
        source: "/careers/",
        destination: "/careers/",
      },
      {
        source: "/free-consultation-page/",
        destination: "/free-consultation-page/",
      },
      {
        source: "/contact-us/",
        destination: "/contact-us/",
      },
      {
        source: "/products/wotnot/",
        destination: "/products/wotnot/",
      },
      {
        source: "/products/alertly/",
        destination: "/products/alertly/",
      },
      {
        source: "/blog/",
        destination: "/resources/blog/",
      },
      {
        source: "/ebooks/",
        destination: "/resources/ebooks/",
      },
      {
        source: "/case-study/",
        destination: "/resources/case-study/",
      },
      {
        source: "/white-paper/",
        destination: "/resources/white-paper/",
      },
      {
        source: "/videos/",
        destination: "/resources/videos/",
      },
      ...finaldata,
      // {
      //   source: "/what-is-a-citizen-developer/",
      //   destination: "/blog/citizen-developer-framework/",
      // },
      // {
      //   source: "/mobile-application-development-trends/",
      //   destination: "/blog/7-trends-of-mobile-application-development/",
      // },

      // {
      //   source: "/cognitive-computing-features-scope/",
      //   destination: "/blog/cognitive-computing-features-scope-limitations/",
      // },
      // {
      //   source: "/testing-1/",
      //   destination: "/blog/testing/",
      // },
      // {
      //   source: "/cluster-analysis-in-predictive-analytics/",
      //   destination: "/blog/cluster-analysis-in-predictive-analytics/",
      // },
      // {
      //   source: "/maruti-techlabs-on-clutch-leaders-matrix/",
      //   destination: "/blog/maruti-techlabs-on-clutch-leaders-matrix/",
      // },
      // {
      //   source: "/guide-to-build-a-personal-budgeting-app-like-mint/",
      //   destination: "/blog/guide-to-build-a-personal-budgeting-app-like-mint/",
      // },

      // {
      //   source: "/guide-to-component-based-architecture/",
      //   destination: "/blog/guide-to-component-based-architecture/",
      // },
    ];
  },
};
