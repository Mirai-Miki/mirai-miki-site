import * as React from "react";
import { Stack, Image } from "@mantine/core";
import { SocialButton } from "./SocialButton";

const buttons = [
  {
    name: "GitHub",
    icon: "https://res.cloudinary.com/dze64d7cr/image/upload/v1724841161/SocialLogos/github.webp",
    link: "https://github.com/Mirai-Miki",
    gradient: {
      light:
        "linear-gradient(190deg, rgba(159,159,159,1) 0%, rgba(0,0,0,1) 100%)",
      dark: "linear-gradient(308deg, rgba(223,223,223,1) 0%, rgba(117,117,117,1) 83%)",
    },
  },
  {
    name: "Mirai Lounge",
    icon: "https://res.cloudinary.com/dze64d7cr/image/upload/v1724840811/SocialLogos/discord.webp",
    link: "https://discord.gg/H3HgDR2TVr",
    gradient: {
      light:
        "linear-gradient(190deg, rgba(39,102,219,1) 0%, rgba(25,0,70,1) 100%)",
      dark: "linear-gradient(190deg, rgba(60,194,245,1) 0%, rgba(81,71,192,1) 100%)",
    },
  },
  {
    name: "Instagram",
    icon: "https://res.cloudinary.com/dze64d7cr/image/upload/v1724841010/SocialLogos/instagram.webp",
    link: "https://www.instagram.com/mirai_miki_art/",
    gradient: {
      light:
        "linear-gradient(190deg, rgba(65,58,180,1) 0%, rgba(253,29,125,1) 65%, rgba(252,176,69,1) 85%)",
      dark: "linear-gradient(190deg, rgba(65,58,180,1) 0%, rgba(253,29,125,1) 65%, rgba(252,176,69,1) 85%)",
    },
  },
  {
    name: "Cara",
    icon: "https://cdn.cara.app/cdn-cgi/image/width=40/production/profiles/801ceb1a-6642-4dc2-9f94-4c816f560fbc/cara-logo.png",
    link: "https://cara.app/mirai-miki",
    gradient: {
      light:
        "linear-gradient(190deg, rgba(159,159,159,1) 0%, rgba(5,0,57,1) 100%)",
      dark: "linear-gradient(190deg, rgba(255,255,255,1) 0%, rgba(66,60,130,1) 100%)",
    },
  },
];

export function SocialLinkStack() {
  return (
    <Stack align="center" justify="flex-start" gap="md">
      {buttons.map((button, index) => (
        <SocialButton
          key={index}
          name={button.name}
          icon={button.icon}
          link={button.link}
          gradient={button.gradient}
          data-umami-event={button.name}
        />
      ))}
    </Stack>
  );
}
