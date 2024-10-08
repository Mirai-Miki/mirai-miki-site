// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import React from "react";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      {element}
    </MantineProvider>
  );
};
