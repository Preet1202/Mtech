import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";
import CookieConsent from "react-cookie-consent";
import { SSRProvider } from "@react-aria/ssr";
import { gtmCode, googleSiteVerification } from "../config/variableConfig";

import "../styles/theme.scss";
import "../styles/common.scss";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 50,
      accessibility: false,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  // var regex = /[?&]([^=#]+)=([^&#]*)/g;
  // if (typeof window !== "undefined") {
  //   var url = window.location.href;

  //   const params = {};
  //   let match;
  //   while ((match = regex.exec(url))) {
  //     params[match[1]] = match[2];
  //   }
  //   function getCookie() {
  //     let cookie = {};
  //     if (typeof document !== "undefined") {
  //       document.cookie.split(";").forEach(function (el) {
  //         let [key, value] = el.split("=");

  //         cookie[key.trim()] = value;
  //       });
  //       return cookie;
  //     }
  //   }
  //   var cookieObj = getCookie();
  //   var urlClckClarity = cookieObj?._clck?.split("|")[0];
  //   var urlClskClarity = cookieObj?._clsk?.split("|")[0];
  //   var clarityURL =
  //     "https://clarity.microsoft.com/player/birhzuvy40/" +
  //     urlClckClarity +
  //     "/" +
  //     urlClskClarity +
  //     "/";
  //   localStorage.setItem("clarity", clarityURL);

  //   let gscObj = {
  //     // client_id:
  //     //   "https://analytics.google.com/analytics/web/#/report/visitors-user-activity/a47328646w294350267p255848070/_r.userId=" +
  //     //   ga.getAll()[0].get("clientId"),
  //     sourcfe_url: window.location.href,
  //     clarity: clarityURL,
  //   };
  //   if (params && params.utm_campaign && params.utm_campaign !== null) {
  //     localStorage.setItem("utm_campaign", params.utm_campaign);
  //     gscObj.utm_campaign = params.utm_campaign;
  //   }

  //   if (params && params.utm_medium && params.utm_medium !== null) {
  //     localStorage.setItem("utm_medium", params.utm_medium);
  //     gscObj.utm_medium = params.utm_medium;
  //   }
  //   if (params && params.utm_source && params.utm_source !== null) {
  //     localStorage.setItem("utm_source", params.utm_source);
  //     gscObj.utm_source = params.utm_source;
  //   }

  //   if (
  //     document.referrer !== "" &&
  //     !document.referrer.includes("https://test.marutitech.com/") &&
  //     !document.referrer.includes("https://marutitech.com/")
  //   ) {
  //     localStorage.setItem("referrer", document.referrer);
  //     gscObj.referrer = params.referrer;
  //   }
  //   gsc("params", gscObj);
  //   let tempObj = { sourcfe_url: window.location.href };

  //   gsc("onSubmit", function (widgetId, data) {
  //     Object.assign(gscObj, tempObj);
  //   });
  // }

  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://cdn-gcp.new.marutitech.com" />
        <link rel="dns-prefetch" href="https://cdn-gcp.new.marutitech.com" /> */}

        {/* <!-- Google Tag Manager --> */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmCode}');`}
        </script>

        {/* <!-- End Google Tag Manager --> */}
        {/* <meta name="robots" content="noindex" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          key="viewport-meta"
        />

        {/* google search console meta starts here */}
        <meta
          name="google-site-verification"
          content={googleSiteVerification}
        />

        {/* google search console meta ends here */}

        <link
          rel="icon"
          href={
            "https://cdn-gcp.new.marutitech.com/maruti_logo_favicon_601073ab6b.png"
          }
        />

        {/* <!-- Microsoft Clarity Script --> */}
        {/* <script type="text/javascript">
          {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "coioimh5jz");`}
        </script> */}

        {/* <!-- End Microsoft Clarity Script --> */}
      </Head>
      {/* Final Script GTM here */}
      {/* <Script id="google-tag-manager" strategy="lazyOnload">
        {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmCode}');

      `}
      </Script> */}

      {/* Final Script GTM Ends here */}

      {/* <!--Polyfill start --> */}
      <Script
        id="polyfill"
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="lazyOnload"
      />
      {/* <!--Polyfill end --> */}
      {/* footer firm widgets script starts here */}
      <Script
        type="text/javascript"
        src="https://widget.clutch.co/static/js/widget.js"
      />

      {/* footer firm widgets script ends here */}

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmCode}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <CookieConsent
        debug={false}
        style={{
          background: "rgba(0,0,0,1)",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          fontSize: "13px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Arial, Roboto, Helvetica ",
        }}
        buttonStyle={{
          background: "#fbb03b",
          color: "white",
          borderRadius: "4px",
          marginLeft: "0px",
        }}
        buttonText="Ok"
        enableDeclineButton
        declineButtonText="×"
        declineButtonStyle={{
          background: "rgba(0,0,0,1)",
          color: "#777",
          fontSize: "18px",
          padding: "0",
          margin: "0",
          fontSize: "25px",
          position: "absolute",
          right: "1rem",
          top: "0.8rem",
        }}
        hideOnAccept={true}
      >
        We use cookies to improve your browsing experience. Learn about our{" "}
        <Link href="/privacy-policy/">Privacy policy</Link>
      </CookieConsent>
    </>
  );
}

export default MyApp;
