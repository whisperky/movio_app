"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

const CreateMoviePage: React.FC = () => {
  const router = useRouter();

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
    if (title && year && image) {
      console.log({ title, year, image });
      setTitle("");
      setYear("");
      setImage(null);
      alert("Movie created successfully!");
    } else {
      alert("Please fill in all fields and upload an image.");
    }
  };

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setImage(null);
    router.push("/movies");
  };

  return (
    <Box mx="auto" padding={{ base: "20px", sm: "120px" }} boxShadow="md">
      <Heading
        size="lg"
        textAlign="left"
        mb="6"
        className="text-[white] text-[32px]/[40px] font-semibold "
      >
        Create a new movie
      </Heading>

      <Flex direction={{ base: "column", sm: "row" }} gap={20}>
        <Box flex={{ sm: 1 }}>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              position: "absolute",
              width: "calc(100vw - 140px)",
              height: "calc(100vh - 200px)",
              opacity: 0,
              cursor: "pointer",
              zIndex: 1,
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
            overflow="hidden"
            position="relative"
          >
            {image ? (
              <Image src={image} alt="Uploaded preview" />
            ) : (
              <Text color="gray.500">Drop an image here</Text>
            )}
          </Box>
        </Box>

        <Flex direction="column" gap={4} flex={{ sm: 1 }} zIndex={2}>
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
