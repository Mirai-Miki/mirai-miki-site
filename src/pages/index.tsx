import * as React from "react";

import { Container, Space } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { Bio } from "../components/Index/Bio";
import { SocialLinkStack } from "../components/Index/SocialLinkStack";
import * as styles from "../components/Index/Index.module.css";
import { useMantineColorScheme } from "@mantine/core";

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const bodyClass = colorScheme === "dark" ? styles.dark : styles.light;

  React.useEffect(() => {
    document.body.classList.add(bodyClass);
    return () => document.body.classList.remove(bodyClass);
  }, [colorScheme]);

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
    </>
  );
};
