import * as React from "react";

import { Container, Space } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { Bio } from "../components/Index/Bio";
import { SocialLinkStack } from "../components/Index/SocialLinkStack";
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
      <body className={styles.body} />
    </>
  );
};
