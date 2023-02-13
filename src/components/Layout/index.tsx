import React, { useState } from "react";
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  ScrollArea,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";
import { Logo } from "./Logo";
import Navbar from "./Navbar";
import useWindowSize from "hooks/useWindowSize";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { height } = useWindowSize();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={<Navbar opened={opened} />}
      header={
        <Header height={60}>
          <div className="flex items-center justify-between h-full">
            <Group position="apart" spacing="lg" className="w-full" p="sm">
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Logo colorScheme={colorScheme} />
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <FiSun size={16} />
                ) : (
                  <FiMoon size={16} />
                )}
              </ActionIcon>
            </Group>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <ScrollArea style={{ height: height - 92 }}>{props.children}</ScrollArea>
    </AppShell>
  );
};

export default Layout;
