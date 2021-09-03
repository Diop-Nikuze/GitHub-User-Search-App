import {
  Grid,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  SkeletonText,
} from "@chakra-ui/react";
import iconLocation from "../images/icon-location.svg";
import iconWebsite from "../images/icon-website.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconCompany from "../images/icon-company.svg";

const SocialInfo = ({ details, loading }) => {
  const color = useColorModeValue("#4B6A9B", "white");
  const notAvailableColor = useColorModeValue("#a4b3ce", "#5f6e86");

  return (
    <Box color={color}>
      {details.map((user, id) => (
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          key={id}
          lineHeight="2.7"
        >
          <Box
            fontSize={{
              base: "13px",
              sm: "13px",
              md: "inherit",
              lg: "inherit",
            }}
          >
            <Flex alignItems="center">
              <Image mr={5} src={iconLocation} alt=""></Image>
              <SkeletonText
                isLoaded={!loading}
                noOfLines={1}
                startColor="grey"
                endColor="white"
              >
                <Text>
                  {user.location ? (
                    user.location
                  ) : (
                    <Text as="span" color={notAvailableColor}>
                      Not Available
                    </Text>
                  )}
                </Text>
              </SkeletonText>
            </Flex>
            <Flex alignItems="center">
              <Image mr={4} src={iconWebsite} alt=""></Image>
              <SkeletonText
                isLoaded={!loading}
                noOfLines={1}
                startColor="grey"
                endColor="white"
              >
                <Text>
                  {user.blog ? (
                    user.blog
                  ) : (
                    <Text as="span" color={notAvailableColor}>
                      Not Available
                    </Text>
                  )}
                </Text>
              </SkeletonText>
            </Flex>
          </Box>
          <Box
            fontSize={{
              base: "13px",
              sm: "13px",
              md: "inherit",
              lg: "inherit",
            }}
          >
            <Flex alignItems="center">
              <Image mr={5} src={iconTwitter} alt=""></Image>
              <SkeletonText
                isLoaded={!loading}
                noOfLines={1}
                startColor="grey"
                endColor="white"
              >
                <Text>
                  {user.twitter_username ? (
                    user.twitter_username
                  ) : (
                    <Text as="span" color={notAvailableColor}>
                      Not Available
                    </Text>
                  )}
                </Text>
              </SkeletonText>
            </Flex>
            <Flex alignItems="center">
              <Image mr={5} src={iconCompany} alt=""></Image>
              <SkeletonText
                isLoaded={!loading}
                noOfLines={1}
                startColor="grey"
                endColor="white"
              >
                <Text>
                  {user.company ? (
                    user.company
                  ) : (
                    <Text as="span" color={notAvailableColor}>
                      Not Available
                    </Text>
                  )}
                </Text>
              </SkeletonText>
            </Flex>
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default SocialInfo;
