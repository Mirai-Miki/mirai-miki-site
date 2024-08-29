import * as React from "react";
import {
  Button,
  useMantineTheme,
  Flex,
  useMantineColorScheme,
  CopyButton,
  ActionIcon,
  Tooltip,
  rem,
  Image,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
// @ts-ignore
import * as styles from "./SocialButtonStyle.module.css";

const sizeMap = {
  xs: { buttonSize: "25", buttonHeight: 60, buttonWidth: 320, iconPadding: 30 },
  sm: { buttonSize: "35", buttonHeight: 70, buttonWidth: 425, iconPadding: 15 },
  md: { buttonSize: "40", buttonHeight: 70, buttonWidth: 450, iconPadding: 15 },
  lg: { buttonSize: "40", buttonHeight: 75, buttonWidth: 500, iconPadding: 15 },
  xl: { buttonSize: "40", buttonHeight: 75, buttonWidth: 500, iconPadding: 15 },
};

export function SocialButton(props: {
  name: string;
  icon: string;
  link: string;
  gradient: { light: string; dark: string };
}) {
  const { name, icon, link, gradient } = props;

  let gradientString;
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [size, setSize] = React.useState(sizeMap.md);

  if (colorScheme === "dark") gradientString = gradient.dark;
  else gradientString = gradient.light;

  const emToPx = (em: string) => {
    return parseInt(em) * 16;
  }; // Convert em to px (assuming root font-size is 16px)

  React.useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width < emToPx(theme.breakpoints.xs)) setSize(sizeMap.xs);
      else if (width < emToPx(theme.breakpoints.sm)) setSize(sizeMap.sm);
      else if (width < emToPx(theme.breakpoints.md)) setSize(sizeMap.md);
      else if (width < emToPx(theme.breakpoints.lg)) setSize(sizeMap.lg);
      else setSize(sizeMap.xl);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [theme.breakpoints]);

  return (
    <Flex justify="center" align="center" direction="row" gap="md">
      <Button
        classNames={{ root: styles.root, section: styles.section }}
        component="a"
        href={link}
        target="_blank"
        variant="outline"
        leftSection={<Image src={icon} h={50} w="auto" pr={size.iconPadding} />}
        rightSection={<IconExternalLink size="30" stroke={1} />}
        size={size.buttonSize}
        mih={size.buttonHeight}
        miw={size.buttonWidth}
        onClick={(event) => {
          // @ts-ignore
          umami.track({ name });
        }}
      >
        <span
          style={{
            background: `${gradientString} text`,
            color: "transparent",
          }}
        >
          {name}
        </span>
      </Button>
      <ClipboardButton link={link} />
    </Flex>
  );
}

function ClipboardButton(props: { link: string }) {
  const { link } = props;
  return (
    <CopyButton value={link} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? "Copied" : "Copy: " + link}
          withArrow
          position="right"
        >
          <ActionIcon
            color={copied ? "rgba(47, 153, 93, 1)" : "gray"}
            variant="subtle"
            onClick={copy}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
