"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e.preventDefault());
    console.log({ email, password, rememberMe });
    if (email && password) {
      router.push("/movies");
    } else {
      alert("Please enter email and password");
    }
    // Here you can handle form submission, like sending data to an API.
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="#093545">
      <Box w="full" maxW="md" p={8}>
        <Flex flexDirection="column" gap={8}>
          <Heading
            as="h2"
            textAlign="center"
            color="white"
            className="font-montserrat text-[64px] font-[600] pb-[40px]"
          >
            Sign in
          </Heading>
          <form onSubmit={handleSubmit}>
            <Flex flexDirection="column" gap={4} align="stretch">
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                px="10px"
                bg="#224957"
                color="white"
                _placeholder={{
                  color: "gray.300",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Montserrat",
                }}
                borderColor="green.500"
              />
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                px="10px"
                bg="#224957"
                color="white"
                _placeholder={{
                  color: "gray.300",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Montserrat",
                }}
                borderColor="green.500"
              />
              <Checkbox
                variant={"subtle"}
                colorPalette="teal"
                color="white"
                justifyContent="center"
                className="font-montserrat"
              >
                Remember me
              </Checkbox>
              <Button
                type="submit"
                w="full"
                py={6}
                bg="#2BD17E"
                color="white"
                _hover={{ bg: "#2BD17Edd" }}
                fontSize="16px"
                fontWeight="medium"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Flex>
  );
}
