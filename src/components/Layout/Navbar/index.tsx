import { Navbar as MantineNavbar } from "@mantine/core";
import MainLinks from "./MainLinks";
import { User } from "./User";

const Navbar: React.FC<{ opened: boolean }> = ({ opened }) => {
  return (
    <MantineNavbar
      p="xs"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300 }}
    >
      <MantineNavbar.Section grow mt="xs">
        <MainLinks />
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <User />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
