import * as React from "react";
import { Flex } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle/ColorSchemeToggle";

export function NavBar() {
  return (
    <Flex py={20} justify="flex-end" align="center">
      <ColorSchemeToggle />
    </Flex>
  );
}
