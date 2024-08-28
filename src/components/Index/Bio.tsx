import * as React from "react";
import { Avatar, Title, Text, Stack } from "@mantine/core";

export function Bio() {
  return (
    <Stack align="center" justify="flex-start" gap="md">
      <Avatar
        src="https://res.cloudinary.com/dze64d7cr/image/upload/v1724840198/mirai-miki-art/avatar.webp"
        name="Mirai-Miki"
        alt="Mirai-Miki"
        size="200"
      />
      <Title order={1}>Mirai-Miki</Title>
      <Text ta="center">
        Programmer, Discord Bot Dev, Web Dev, Artist, 3D Modeling
      </Text>
    </Stack>
  );
}
