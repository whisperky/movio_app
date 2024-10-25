"use client";

import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Add, Logout } from "@/components/icons";

import { sampleVideos, Video } from "@/services/tempData";
import { MovieCard } from "@/components/MovieCard";

// Update the Video type

export default function MoviesPage() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [videos, setVideos] = useState<Video[]>([]);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchVideos = () => {
      setVideos(sampleVideos);
    };

    fetchVideos();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  // Handle pagination logic
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Box minH="100vh" pt="50px" pb="200px" px={5} className="font-montserrat">
      <Box maxW="1200px" mx="auto">
        {/* Header */}
        <Flex className="flex justify-between items-center" py="100px">
          <Flex alignItems="baseline" gap={4}>
            <Text fontSize="5xl" color="white" fontWeight="600">
              My Videos
            </Text>
            <Add />
          </Flex>
          <Button
            className="items-center"
            variant="ghost"
            color="white"
            onClick={() => router.push("/login")}
          >
            <Text className="hidden sm:flex">Logout</Text>
            <Logout />
          </Button>
        </Flex>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          {currentVideos.map((video) => (
            <MovieCard video={video} key={video.id} />
          ))}
        </Grid>

        {/* Pagination */}
        <Flex justifyContent="center" mt={8} gap={4} color="white">
          <Button onClick={handlePrev} disabled={page === 1} colorScheme="teal">
            Prev
          </Button>
          <Text alignSelf="center">{`${page} / ${totalPages}`}</Text>
          <Button
            onClick={handleNext}
            disabled={page === totalPages}
            colorScheme="teal"
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
