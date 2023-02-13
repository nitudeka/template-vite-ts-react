import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  Button,
  Popover,
} from "@mantine/core";
import { FiChevronRight, FiChevronLeft, FiLogOut } from "react-icons/fi";
import BotImg from "assets/png/profile.png";
import { useAuthentication } from "hooks/query/useAuthentication";

export function User() {
  const theme = useMantineTheme();
  const { logOut } = useAuthentication();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <Popover trapFocus position="right" withArrow>
        <Popover.Target>
          <UnstyledButton
            sx={{
              display: "block",
              width: "100%",
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
              },
            }}
          >
            <Group>
              <Avatar src={BotImg} radius="xl" />
              <Box sx={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  Admin
                </Text>
                <Text color="dimmed" size="xs">
                  admin@example.com
                </Text>
              </Box>

              {theme.dir === "ltr" ? (
                <FiChevronRight size={18} />
              ) : (
                <FiChevronLeft size={18} />
              )}
            </Group>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown
          sx={(theme) => ({
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          })}
        >
          <Button
            variant="light"
            color="gray"
            rightIcon={<FiLogOut size={18} />}
            onClick={logOut}
          >
            Log out
          </Button>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
