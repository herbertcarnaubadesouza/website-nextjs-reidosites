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
          <meta property="og:image:alt" content="O Rei do Sites" />
          <title>Criação de Sites Profissionais - O Rei dos Sites</title>

          {/* Facebook Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '786995626366265');
              fbq('track', 'PageView');
              `,
            }}
          />
          {/* End Facebook Pixel Code */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Facebook Pixel Code No Script*/}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=786995626366265&ev=PageView&noscript=1"
              />`,
            }}
          />
          {/* End Facebook Pixel Code No Script*/}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
