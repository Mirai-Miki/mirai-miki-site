import * as React from "react";
import { Link } from "gatsby";
// @ts-ignore
import * as styles from "../components/Index/Index.module.css";
import {
  Container,
  Image,
  Grid,
  Stack,
  Title,
  Text,
  ActionIcon,
} from "@mantine/core";
import { IconHomeFilled } from "@tabler/icons-react";

const NotFoundPage = () => {
  return (
    <Container>
      <Grid pt={50} justify="center" align="center">
        <Image src="https://res.cloudinary.com/dze64d7cr/image/upload/v1724918723/mirai-miki-art/404.webp" />
        <Stack align="center" justify="center">
          <Title ta="center">Oops, looks like you lost your way!</Title>
          <Text ta="center">
            You should probably stick to the path. Don’t worry, you can always
            follow me home.{" "}
            {
              <Link to="/">
                <ActionIcon>
                  <IconHomeFilled />
                </ActionIcon>
              </Link>
            }
          </Text>
        </Stack>
      </Grid>
    </Container>
  );
};

export default NotFoundPage;

export const Head = () => {
  return (
    <>
      <title>Not found</title>
      <meta name="description" content="404 page not found" />
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
