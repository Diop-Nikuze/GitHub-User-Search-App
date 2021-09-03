import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      fontSize={{ base: 10, sm: 10, md: 13, lg: 13 }}
      my={5}
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "#4B6A9B" }}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/Nikuze"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "#4B6A9B" }}
      >
        Diop Nikuze
      </a>
    </Box>
  );
};

export default Footer;
