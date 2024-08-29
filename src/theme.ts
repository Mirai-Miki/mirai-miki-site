// src/theme.ts
import { createTheme, MantineColorsTuple } from "@mantine/core";

const primaryColor: MantineColorsTuple = [
  "#faedff",
  "#edd9f7",
  "#d8b1ea",
  "#c286dd",
  "#ae62d2",
  "#a24bcb",
  "#9e3fc9",
  "#8931b2",
  "#7b2aa0",
  "#6b218d",
];

export const theme = createTheme({
  fontFamily: "Cabin Sketch, Comic Sans MS, Comic Sans, sans-serif",
  colors: {
    primaryColor,
  },
  primaryShade: { light: 9, dark: 6 },
  primaryColor: "primaryColor",
  fontSizes: { xs: "12", sm: "14", md: "16", lg: "18", xl: "20", xxl: "24" },
  autoContrast: true,
});
