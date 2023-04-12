import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Início da tag do Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-M4DXC7H');`,
            }}
          />
          {/* Fim da tag do Google Tag Manager */}
          <meta
            name="description"
            content="Criação de sites profissionais e personalizados para empresas. Transforme a presença digital da sua empresa com a ajuda do Rei dos Sites."
          />
          <meta property="og:image" content="/images/backgroundReiMobile.png" />
          <meta
            property="og:title"
            content="Criação de Sites Profissionais - O Rei dos Sites"
          ></meta>
          <meta property="og:description" content="O Rei dos Sites:"></meta>
          <meta property="og:image:alt" content="O Rei do Sites" />
          <title>Criação de Sites Profissionais - O Rei dos Sites</title>
        </Head>
        <body>
          {/* Início da tag do Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M4DXC7H"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* Fim da tag do Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
