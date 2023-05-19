import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <title>Siddharth Agrawal - Frontend Developer Portfolio</title>
        <Head>
          <meta
            name="title"
            content="Siddharth Agrawal - Frontend Developer Portfolio"
          />
          <meta
            name="description"
            content="Explore the portfolio of Siddharth Agrawal, a frontend developer with expertise in creating responsive and engaging websites using HTML, CSS, JavaScript, and React. Discover his projects and skills in web development and design. Get in touch for collaborations and web development services."
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/monorepo-projects.appspot.com/o/Portfolio.PNG?alt=media"
          />
          <meta
            property="og:image:secure_url"
            content="https://firebasestorage.googleapis.com/v0/b/monorepo-projects.appspot.com/o/Portfolio.PNG?alt=media"
          />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="720" />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
