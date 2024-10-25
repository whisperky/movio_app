import { Box, AspectRatio, Image, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { Video } from "@/services/tempData";

export const MovieCard = ({ video }: { video: Video }) => {
  const router = useRouter();
  return (
    <Box
      key={video.id}
      bg="#092C39"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
    >
      <AspectRatio ratio={16 / 9} h="300px">
        <Box position="relative" p="8px">
          <Image
            src={video.thumbnail}
            borderRadius="md"
            alt={video.title}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity="0"
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
            onClick={() => router.push(`/movies/${video.id}`)}
            cursor="pointer"
          >
            <Box as="span" fontSize="4xl" color="white">
              ▶️
            </Box>
          </Box>
        </Box>
      </AspectRatio>
      <Flex direction="column" px={4} py={6} gap="8px" align="start">
        <Text fontWeight="500" fontSize="20px" color="white">
          {video.title}
        </Text>
        <Text fontSize="sm" color="white">
          {video.year}
        </Text>
      </Flex>
    </Box>
  );
};
