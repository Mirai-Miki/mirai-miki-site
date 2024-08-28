import * as React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon size="lg" variant="outline" onClick={() => toggleColorScheme()}>
      <IconSun />
    </ActionIcon>
  );
}
