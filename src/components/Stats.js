import {
  Box,
  Grid,
  Text,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";

const Stats = ({ details, loading }) => {
  const bg = useColorModeValue("#f5f8ff", "#141c2f");
  const color = useColorModeValue("#4B6A9B", "white");

  return (
    <Box
      mt={{ base: 135, sm: 135, md: 20, lg: 20 }}
      mb={7}
      bgColor={bg}
      py={3}
      pl={7}
      borderRadius="10px"
    >
      {details.map((user, id) => (
        <Grid gridTemplateColumns="repeat(3, 1fr)" key={id} lineHeight="2">
          <Box>
            <Text
              color={color}
              fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "14px" }}
            >
              Repos
            </Text>
            <SkeletonText isLoaded={!loading} noOfLines={1} w={65} mt={4}>
              <Text fontWeight="700" fontSize="20px" mt={-4}>
                {user.public_repos}
              </Text>
            </SkeletonText>
          </Box>
          <Box>
            <Text
              color={color}
              fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "14px" }}
            >
              Followers
            </Text>
            <SkeletonText isLoaded={!loading} noOfLines={1} w={65} mt={4}>
              <Text fontWeight="700" fontSize="20px" mt={-4}>
                {user.followers}
              </Text>
            </SkeletonText>
          </Box>
          <Box>
            <Text
              color={color}
              fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "14px" }}
            >
              Following
            </Text>
            <SkeletonText isLoaded={!loading} noOfLines={1} w={65} mt={4}>
              <Text fontWeight="700" fontSize="20px" mt={-4}>
                {user.following}
              </Text>
            </SkeletonText>
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default Stats;
