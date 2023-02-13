import { Outlet } from "react-router-dom";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import AuthWrapper from "containers/Auth";

let cachedColorScheme: ColorScheme =
  (window.localStorage.getItem("colors-scheme") as ColorScheme) || "light";
if (cachedColorScheme) {
  if (["dark", "light"].indexOf(cachedColorScheme) === -1) {
    cachedColorScheme = "light";
  }
}

function App() {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(cachedColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const scheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(scheme);
    window.localStorage.setItem("colors-scheme", scheme as string);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: colorScheme, fontFamily: "Roboto" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AuthWrapper>
          <Outlet />
        </AuthWrapper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
