import {
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import iconSearch from "../images/icon-search.svg";
import "../App.css";

const SearchInput = ({ handleChange, handleSubmit, disabled, value }) => {
  const bg = useColorModeValue("white", "#1f2a48");

  return (
    <Box mb={5}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Image src={iconSearch} alt="Icon Search"></Image>}
            h={65}
            ml={{ base: 4, sm: 4, md: 0, lg: 0 }}
            w={{ base: 5, sm: 5, md: 20, lg: 20 }}
          />

          <Input
            placeholder="Search Github username..."
            onChange={handleChange}
            className="inputSearch"
            h={65}
            borderRadius="15px"
            textAlign={{ base: "left", sm: "left", md: "center", lg: "center" }}
            bg={bg}
            value={value}
          />
          <InputRightElement
            w={{ base: 75, sm: 75, md: 100, lg: 100 }}
            mr={2}
            h={65}
            children={
              <Button
                size="md"
                onClick={handleSubmit}
                bgColor="#0079f1"
                color="white"
                borderRadius="7px"
                _hover={{ bgColor: "#60ABFF" }}
                disabled={disabled}
              >
                Search
              </Button>
            }
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
