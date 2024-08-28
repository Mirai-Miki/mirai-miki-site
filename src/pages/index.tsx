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
      <html lang="en" data-mantine-color-scheme="light" />
      <title>Mirai-Miki</title>
      <body className={styles.body} />
    </>
  );
};
