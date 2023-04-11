import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
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
          <meta
            property="og:image:alt"
            content="Thumbnail image for My Website"
          />
          <title>Criação de Sites Profissionais - O Rei dos Sites</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
