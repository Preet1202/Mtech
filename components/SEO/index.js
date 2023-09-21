/* eslint-disable react/jsx-key */
import React from "react";
import Head from "next/head";

const SEO = ({ seoData }) => {
  return (
    <Head>
      <title>{seoData?.title}</title>
      <meta name="description" content={seoData?.description} />
      <meta name="keywords" content={seoData?.keywords?.keyword} />
      <link rel="canonical" href={seoData?.url} />
      {seoData?.image && (
        <meta name="image" content={seoData?.image?.data?.attributes?.url} />
      )}
      {/* {seoData?.metaProperties?.map((property) => (
        <meta property={property.name} content={property.content} />
      ))} */}
      {seoData?.locale && (
        <meta property="og:locale" content={seoData?.locale} />
      )}
      {seoData?.url && <meta property="og:url" content={seoData?.url} />}
      {seoData?.type && <meta property="og:type" content={seoData?.type} />}
      {seoData?.title && <meta property="og:title" content={seoData?.title} />}
      {seoData?.description && (
        <meta property="og:description" content={seoData?.description} />
      )}
      {seoData?.image && (
        <meta
          property="og:image"
          content={seoData?.image?.data?.attributes?.url}
        />
      )}
      {seoData?.image && (
        <meta
          property="og:image:secure_url"
          content={seoData?.image?.data?.attributes?.url}
        />
      )}
      {seoData?.site_name && (
        <meta property="og:site_name" content={seoData?.site_name} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seoData?.title && <meta name="twitter:title" content={seoData?.title} />}
      {seoData?.description && (
        <meta name="twitter:description" content={seoData?.description} />
      )}
      {seoData?.image && (
        <meta
          name="twitter:image"
          content={seoData?.image?.data?.attributes?.url}
        />
      )}
      <meta name="twitter:creator" content="@MarutiTech" />
      {seoData && SchemaScript(seoData)}
    </Head>
  );
};

function SchemaScript(seoData) {
  let surl = seoData?.url;
  let sname = seoData?.title;
  let imageURL = seoData?.image?.data?.attributes?.url;
  let sdesc = seoData?.description;

  // let schemda = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "Organization",
  //       "@id": "https://marutitech.com/#organization",
  //       name: "",
  //       url: "https://marutitech.com/",
  //       sameAs: [],
  //     },
  //     {
  //       "@type": "WebSite",
  //       "@id": "https://marutitech.com/#website",
  //       url: "https://marutitech.com/",
  //       name: "Maruti Techlabs",
  //       publisher: {
  //         "@id": "https://marutitech.com/#organization",
  //       },
  //       potentialAction: {
  //         "@type": "SearchAction",
  //         target: "https://marutitech.com/?s={search_term_string}",
  //         "query-input": "required name=search_term_string",
  //       },
  //     },
  //     {
  //       "@type": "WebPage",
  //       "@id": "https://marutitech.com/#webpage",
  //       url: seoData?.url,
  //       inLanguage: "en-US",
  //       name: seoData?.title,
  //       isPartOf: {
  //         "@id": "https://marutitech.com/#website",
  //       },
  //       about: {
  //         "@id": "https://marutitech.com/#organization",
  //       },
  //       image: {
  //         "@type": "ImageObject",
  //         "@id": "https://marutitech.com/#primaryimage",
  //         url: seoData?.image?.data?.attributes?.url,
  //         width: 631,
  //         height: 417,
  //         caption: "home-hero-image",
  //       },
  //       primaryImageOfPage: {
  //         "@id": "https://marutitech.com/#primaryimage",
  //       },
  //       datePublished: "2019-03-19T05:53:21+00:00",
  //       dateModified: "2020-11-02T08:06:30+00:00",
  //       description: seoData?.description,
  //     },
  //   ],
  // };

  let schemadata = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://marutitech.com/#organization",
        "name": "",
        "url": "https://marutitech.com/",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://marutitech.com/#website",
        "url": "https://marutitech.com/",
        "name": "Maruti Techlabs",
        "publisher": {
          "@id": "https://marutitech.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
         "target": "https://marutitech.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://marutitech.com/#webpage",
        "url": "surl",
        "inLanguage": "en-US",
        "name": "sname",
        "isPartOf": {
          "@id": "https://marutitech.com/#website"
        },
        "about": {
          "@id": "https://marutitech.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://marutitech.com/#primaryimage",
          "url": "imageURL",
          "width": 631,
          "height": 417,
          "caption": "home-hero-image"
        },
        "primaryImageOfPage": {
          "@id": "https://marutitech.com/#primaryimage"
        },
        "datePublished": "2019-03-19T05:53:21+00:00",
        "dateModified": "2020-11-02T08:06:30+00:00",
       "description": "sdesc"
      }
    ] 
  
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemadata) }}
    ></script>
  );
}

export default SEO;
