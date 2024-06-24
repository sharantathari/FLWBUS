import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Learn about Edodwaja's journey in revolutionizing learning with technologies like AR, VR, and IoT. Discover our mission to make futuristic education accessible."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* Favicon*/}
        <link
          rel="shortcut icon"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
          style={{ borderRadius: 50 }}
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/flow-logo.svg"
        />
        <link rel="canonical" href="https://www.flowbus.in/index.html " />
        {/* <link rel="manifest" href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/edodwaja-logo.png"> */}
        <meta
          name="keywords"
          content="About Edodwaja, Educational Technology, Futuristic Learning, AR in Education, VR Learning, EdTech Innovations, Our Story"
        />
        <meta name="Edodwaja's Flow" content="Futuristic Lab on Wheels" />
        <meta
          name="msapplication-TileImage"
          content="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/images/updated/infinity-fav-icon.png"
        />
        <meta name="theme-color" content="#00BCD4" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        {/* Facebook*/}
        <meta property="author" content="Edodwaja pvt ltd" />
        <meta property="og:site_name" content="https://www.flowbus.in/about.html" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* Twitter*/}
        <meta
          property="og:title"
          content="About Edodwaja: Leading the Future of Education"
        />
        <meta
          property="og:description"
          content="Get to know Edodwaja - our ethos, innovations in educational technology, and commitment to practical learning with AR, VR, and more."
        />
        <meta
          property="og:image"
          content="https://www.flowbus.in/images/about-page-banner.jpg"
        />
        <meta property="og:url" content="https://www.flowbus.in/about" />
        <meta property="og:image:width" content={"1200"} />
        <meta property="og:image:height" content={"630"} />
        <title>Flow </title>
        {/* Styles*/}
        {/* Put the 3rd/plugins css here*/}
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/normalize.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/bootstrap.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/magnific-popup.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/materialize.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/hamburger-menu.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/animate.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/animate-extends.css" rel="stylesheet" />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/slick-carousel/slick.css" rel="stylesheet" />
        <link
          href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/slick-carousel/slick-theme.css"
          rel="stylesheet"
        />
        <link href="https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/styles.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
