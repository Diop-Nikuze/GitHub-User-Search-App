import Header from "../Header";
import SearchInput from "../SearchInput";
import Profile from "../Profile";
import Stats from "../Stats";
import SocialInfo from "../SocialInfo";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "../Footer";

const View = ({
  handleChange,
  handleSubmit,
  details,
  loading,
  disabled,
  value,
}) => {
  const bg = useColorModeValue("white", "#1f2a48");
  return (
    <Box my={{ base: 15, sm: 15, md: 85, lg: 85 }}>
      <Header />
      <SearchInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        disabled={disabled}
        value={value}
      />
      <Box p="30px" bgColor="white" borderRadius="10px" bg={bg}>
        <Profile details={details} loading={loading} />
        <Stats details={details} loading={loading} />
        <SocialInfo details={details} loading={loading} />
      </Box>
      <Footer />
    </Box>
  );
};

export default View;
