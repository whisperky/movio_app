"use client";

import { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const CreateMoviePage: React.FC = () => {
  // State for inputs
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  // Handling input changes
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value);

  // Handle image upload
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string); // Type assertion for image data
      reader.readAsDataURL(file);
    }
  };

  // Actions for Submit and Cancel
  const handleSubmit = () => {
    console.log({ title, year, image });
    setTitle("");
    setYear("");
    setImage(null);
    alert("Movie created successfully!");
  };

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setImage(null);
  };

  return (
    <Box mx="auto" mt="20px" padding="20px" boxShadow="md">
      <Heading
        size="lg"
        textAlign="left"
        mb="6"
        className="text-[white] text-[32px]/[40px] font-semibold "
      >
        Create a new movie
      </Heading>

      <Flex direction={{ base: "column", sm: "row" }} gap={4}>
        <Box flex={{ sm: 1 }}>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
          />
          <Box
            aspectRatio={1}
            border="2px dashed #ccc"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="transparent"
          >
            <Text color="gray.500">Drop an image here</Text>
          </Box>
          {image && (
            <Image
              src={image}
              alt="Uploaded preview"
              boxSize="200px"
              mt="4"
              objectFit="cover"
              borderRadius="md"
            />
          )}
        </Box>

        <Flex direction="column" gap={4} flex={{ sm: 1 }}>
          <Input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            variant="subtle"
            size="lg"
            className="bg-[#224957] text-[white]"
          />
          <Input
            placeholder="Publishing year"
            value={year}
            onChange={handleYearChange}
            variant="subtle"
            size="lg"
            type="number"
            className="bg-[#224957] text-[white]"
          />

          <Box display="flex" justifyContent="space-between" mt="4">
            <Button
              width={"182px"}
              colorScheme="gray"
              onClick={handleCancel}
              className="border border-[white] text-[white] p-3"
            >
              Cancel
            </Button>
            <Button
              width={"182px"}
              colorScheme="blue"
              onClick={handleSubmit}
              className="bg-primary text-[white] p-3"
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CreateMoviePage;
