"use client";

// pages/movies.tsx
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Add, Logout } from "@/components/icons";
// Define the Movie type
type Movie = {
  title: string;
  year: string;
  image: string;
};

export default function MoviesPage() {
  // Define an array of movies, here filled with placeholder data
  const [page, setPage] = useState<number>(1);
  const movies: Movie[] = Array(8).fill({
    title: "Movie 1",
    year: "2021",
    image: "https://via.placeholder.com/150", // Replace with your actual image URLs
  });

  // Handle pagination logic
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1); // Assuming there are more pages available
  };

  return (
    <Box minH="100vh" pt="50px" pb="200px" px={5}>
      <Box maxW="1200px" mx="auto">
        {/* Header */}
        <Flex
          justifyContent="space-between"
          alignItems="baseline"
          className="font-montserrat"
          py="100px"
        >
          <Flex alignItems="baseline" gap={4}>
            <Text fontSize="5xl" color="white" fontWeight="600">
              My Movies
            </Text>
            <Add />
          </Flex>
          <Button variant="ghost" color="white">
            Logout
            <Logout />
          </Button>
        </Flex>

        {/* Movie Grid */}
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          {movies.map((movie, index) => (
            <Box
              key={index}
              bg="whiteAlpha.200"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                objectFit="cover"
                h="250px"
                w="full"
              />
              <VStack p={4} align="start">
                <Text fontWeight="bold" color="white">
                  {movie.title}
                </Text>
                <Text fontSize="sm" color="gray.300">
                  {movie.year}
                </Text>
              </VStack>
            </Box>
          ))}
        </Grid>

        {/* Pagination */}
        <Flex justifyContent="center" mt={8} gap={4}>
          <Button onClick={handlePrev} disabled={page === 1} colorScheme="teal">
            Prev
          </Button>
          <Text color="white">{page}</Text>
          <Button onClick={handleNext} colorScheme="teal">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
