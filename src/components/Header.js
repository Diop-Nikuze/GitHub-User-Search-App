import { Flex, Text } from "@chakra-ui/react";
import ColorModeSwitcher from "../ColorModeSwitcher";

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" mb={5}>
      <Text fontSize={30} fontWeight="700">
        devfinder
      </Text>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
