import { Box, Container, Heading, Text, Button, SimpleGrid, Image, Icon, Flex, Spacer, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaBuilding, FaBed, FaClinicMedical, FaBriefcase, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} as="header" align="flex-start" mb={10}>
          <Heading as="h1" size="2xl" color={textColor}>
            Potsdam Business Real Estate
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Premium office spaces and facilities for your business needs.
          </Text>
        </VStack>

        <SimpleGrid columns={[1, null, 2]} spacing={10} as="section">
          <Box>
            <Image src="https://via.placeholder.com/1080" borderRadius="lg" alt="Office Building in Potsdam" />
          </Box>
          <VStack spacing={4} align="flex-start">
            <Heading as="h3" size="lg" color={textColor}>
              A Prime Location for Your Enterprise
            </Heading>
            <Text color={textColor}>Our properties in Potsdam, Brandenburg offer the perfect blend of historical prestige and modern amenities. Ideal for:</Text>
            <Flex align="center">
              <Icon as={FaClinicMedical} color={textColor} w={5} h={5} mr={2} />
              <Text color={textColor}>Medical practices and day hospitals</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaBriefcase} color={textColor} w={5} h={5} mr={2} />
              <Text color={textColor}>Corporate offices</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaBuilding} color={textColor} w={5} h={5} mr={2} />
              <Text color={textColor}>Hostels and overnight stays</Text>
            </Flex>
            <Spacer />
            <Button leftIcon={<FaInfoCircle />} colorScheme="blue">
              Learn More
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box as="footer" bg={bgColor} color={textColor} mt={10} py={5}>
        <Container maxW="container.xl">
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Contact Us
              </Heading>
              <Text>123 Business Avenue</Text>
              <Text>Potsdam, Brandenburg</Text>
              <Text>Germany</Text>
            </VStack>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Quick Links
              </Heading>
              <Button variant="link" colorScheme="blue">
                About Us
              </Button>
              <Button variant="link" colorScheme="blue">
                Properties
              </Button>
              <Button variant="link" colorScheme="blue">
                Services
              </Button>
            </VStack>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Stay Updated
              </Heading>
              <Text>Sign up for our newsletter to get the latest news.</Text>
              {/* Placeholder for the actual newsletter form */}
              <Button colorScheme="blue">Subscribe</Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
