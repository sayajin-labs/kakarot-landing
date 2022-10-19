import { ColorModeScript } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Html, Head, Main, NextScript } from "next/document";

import defaultSEOConfig from "../next-seo.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="Kakarot" content="Ethereum Virtual Machine written in Cairo" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <body style={{ background: "transparent" }}>
        <ColorModeScript initialColorMode="light" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
