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
      <html lang="en" />
      <title>Mirai-Miki</title>
      <meta content="Mirai Miki" property="og:title" />
      <meta
        content="This website is a testament to my procrastination skills."
        property="og:description"
      />
      <meta content="https://mirai-miki.com" property="og:url" />
      <meta
        content="https://res.cloudinary.com/dze64d7cr/image/upload/v1724840198/mirai-miki-art/avatar.webp"
        property="og:image"
      />
      <meta content="#a774cc" data-react-helmet="true" name="theme-color" />
    </>
  );
};
