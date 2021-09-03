import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "Space Mono",
        backgroundColor: props.colorMode === "dark" ? "dark" : "#F6F8FF",
      },
    }),
  },
  config,
});

export default theme;
