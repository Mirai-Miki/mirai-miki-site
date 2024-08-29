import * as React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const icon = colorScheme === "dark" ? <IconSun /> : <IconMoon />;

  return (
    <ActionIcon
      size="lg"
      variant="outline"
      onClick={() => toggleColorScheme()}
      aria-label="Toggle color scheme button"
    >
      {icon}
    </ActionIcon>
  );
}
