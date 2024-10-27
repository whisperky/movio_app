"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, AspectRatio, Heading, Container, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Video } from "@/services/tempData";

// Assume we have a function to fetch video details by ID
import { sampleVideos } from "@/services/tempData";

const MovieView = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = React.use(params);
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch video details when the component mounts or ID changes
      const video = sampleVideos.find((video) => video.id === Number(id));
      setVideo(video || null);
      console.log("video", video);
    }
  }, [id]);

  if (!video) return <Box>Loading...</Box>;

  return (
    <Container maxW="container.xl" py={20}>
      <Flex direction={"column"} gap={20} align="stretch">
        <Flex justify="space-between" align="center">
          <Heading color="white" fontSize={"4xl"}>
            {video.title}, {video.year}
          </Heading>
          <Box
            as="button"
            px={4}
            py={2}
            borderRadius="md"
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            onClick={() => router.push("/movies")}
          >
            Back to Movies
          </Box>
        </Flex>

        <Flex justify={"center"}>
          <AspectRatio ratio={16 / 9} maxH="70vh" width={"80%"}>
            <video src={video.url} controls title={video.title} />
          </AspectRatio>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MovieView;
