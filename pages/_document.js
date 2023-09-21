import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="https://fonts.googleapis.com" />
          <link rel="preload" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* final gtm script starts here */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX9KZ5Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`,
            }}
          /> */}
          {/* final gtm script ends here */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
