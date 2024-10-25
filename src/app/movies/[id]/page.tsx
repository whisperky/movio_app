"use client";

import React from "react";
import {
  Box,
  AspectRatio,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Video } from "@/services/tempData";

// Assume we have a function to fetch video details by ID
import { sampleVideos } from "@/services/tempData";

const MovieView = ({ params }: { params: Promise<{ id: string }> }) => {
  // const router = useRouter();
  const { id } = React.use(params);
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch video details when the component mounts or ID changes
      const video = sampleVideos.find((video) => video.id === Number(id));
      setVideo(video || null);
    }
  }, [id]);

  if (!video) return <Box>Loading...</Box>;

  return (
    <Container maxW="container.xl" py={8}>
      <Flex gap={8} align="stretch">
        <AspectRatio ratio={16 / 9} maxH="70vh">
          <Box bg="#092C39" borderRadius="lg" overflow="hidden">
            {/* Replace with actual video player component */}
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </AspectRatio>

        <Flex direction="column" align="start" gap={4}>
          <Heading color="white">{video.title}</Heading>
          <Text color="white" fontSize="lg">
            {video.year}
          </Text>
          {/* <Text color="white">{video.description}</Text> */}
        </Flex>
      </Flex>
    </Container>
  );
};

export default MovieView;
