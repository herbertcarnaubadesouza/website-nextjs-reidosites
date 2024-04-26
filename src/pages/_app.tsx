import "@/styles/globals.scss";
import "animate.css/animate.compat.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default; // Access the default export
          ReactPixel.init(
            "3588051451455405",
            {
              em: "some@email.com",
              fn: "FirstName", // First name
              ln: "LastName", // Last name
              ph: "PhoneNumber", // Phone number
              ge: "Gender", // Gender
              db: "DateOfBirth", // Date of birth
              ct: "City", // City
              st: "State", // State
              zp: "ZipCode", // Zip code
              country: "Country", // Country
            },
            {
              autoConfig: true,
              debug: false,
            }
          );
          ReactPixel.pageView();
        })
        .catch((err) =>
          console.error("Failed to load React Facebook Pixel", err)
        );
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
        />
        <meta
          name="og:description"
          content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/nextgain-37481.appspot.com/o/Screenshot%202024-04-01%20at%2022.58.47.png?alt=media&token=c87429da-d568-4acc-9b39-e4cb579bb9ac"
        />
        <title>Do Zero aos Sites</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
