import React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const colorIcons = useColorModeValue("black", "white");

  return (
    <Flex
      alignItems="center"
      as="button"
      onClick={toggleColorMode}
      textTransform="uppercase"
      outline="none"
      fontWeight="700"
    >
      {text === "light" ? <Text>Light</Text> : <Text>Dark</Text>}
      <IconButton
        size="sm"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color={colorIcons}
        marginLeft="1"
        icon={<SwitchIcon />}
        {...props}
        _hover={{ border: "none" }}
        _focus={{ outline: "none" }}
      />
    </Flex>
  );
};

export default ColorModeSwitcher;
