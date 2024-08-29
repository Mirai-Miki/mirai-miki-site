import * as React from "react";

import { Container, Space } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { Bio } from "../components/Index/Bio";
import { SocialLinkStack } from "../components/Index/SocialLinkStack";
// @ts-ignore
import * as styles from "../components/Index/Index.module.css";

const IndexPage = () => {
  return (
    <Container>
      <NavBar />
      <Bio />
      <Space h={50} />
      <SocialLinkStack />
    </Container>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <title>Mirai-Miki</title>
      <meta name="description" content="A personal site for Mirai-Miki" />
      <meta content="Mirai Miki | Social links" property="og:title" />
      <meta
        content="This website is a testament to my procrastination skills."
        property="og:description"
      />
      <meta content="https://mirai-miki.com" property="og:url" />
      <meta
        content="https://res.cloudinary.com/dze64d7cr/image/upload/v1724840198/mirai-miki-art/avatar.webp"
        property="og:image"
      />
      <meta content="#d8a1ff" data-react-helmet="true" name="theme-color" />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        defer
        src="https://umami.mirai-miki.com/script.js"
        data-website-id="a2db3ea8-3f65-4f8f-b421-3de53e418e7d"
        data-domains="www.mirai-miki.com,mirai-miki.com"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
        rel="stylesheet"
      />
      <body className={styles.body} />
    </>
  );
};
