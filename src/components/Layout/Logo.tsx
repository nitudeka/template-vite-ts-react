import { ColorScheme, Title } from "@mantine/core";
import LogoDark from "assets/png/logo.png";
import LogoLight from "assets/png/logo.png";

export function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <div className="flex items-center">
      <img
        alt="logo"
        className="w-10 h-10 rounded-lg"
        src={colorScheme === "dark" ? LogoDark : LogoLight}
      />
      <Title order={4} className="ml-2">
        Admin console
      </Title>
    </div>
  );
}
