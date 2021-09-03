import {
  SkeletonText,
  SkeletonCircle,
  Image,
  Box,
  Text,
  Flex,
  Skeleton,
} from "@chakra-ui/react";

const Profile = ({ details, loading }) => {
  const formatDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Box>
      {details.map((user, id) => (
        <Box key={id}>
          <Flex alignItems="center">
            <Box>
              {" "}
              {loading ? (
                <SkeletonCircle
                  size={{ base: "85", sm: "85", md: "130", lg: "130" }}
                  startColor="grey"
                  endColor="white"
                />
              ) : (
                <Image
                  src={user.avatar_url}
                  alt=""
                  w={{ base: 85, sm: 85, md: 130, lg: 130 }}
                  borderRadius="100%"
                ></Image>
              )}
            </Box>
            <Box ml={10} lineHeight="2" mt={-4}>
              <SkeletonText
                noOfLines={3}
                mt={4}
                isLoaded={!loading}
                startColor="grey"
                endColor="white"
              >
                <Text
                  fontSize={{ base: 14, sm: 14, md: 30, lg: 30 }}
                  fontWeight="900"
                >
                  {user.name}
                </Text>
                <Text
                  textTransform="lowercase"
                  color="#0079f1"
                  fontSize={{
                    base: "13px",
                    sm: "13px",
                    md: "inherit",
                    lg: "inherit",
                  }}
                >
                  @{user.login}
                </Text>
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "13px",
                    md: "inherit",
                    lg: "inherit",
                  }}
                >
                  Joined {formatDate.format(new Date(user.created_at))}
                </Text>
              </SkeletonText>
            </Box>
          </Flex>

          <Skeleton
            isLoaded={!loading}
            height="20px"
            startColor="grey"
            endColor="white"
          >
            <Text
              my={7}
              fontSize={{
                base: "13px",
                sm: "13px",
                md: "inherit",
                lg: "inherit",
              }}
              lineHeight={{ base: 2, sm: 2, md: 1.7, lg: 1.7 }}
            >
              {user.bio ? (
                user.bio
              ) : (
                <Text as="span" color="#5f6e86">
                  This profile has no bio.
                </Text>
              )}
            </Text>
          </Skeleton>
        </Box>
      ))}
    </Box>
  );
};

export default Profile;
