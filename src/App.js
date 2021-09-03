import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "@fontsource/space-mono/700.css";
import "@fontsource/space-mono/400.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
