import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={10} alignItems="center">
    <Avatar src="https://i.pravatar.cc/150?img=7" size="2x1" name="Peter"/>
    <Heading as="h4" size="md" noOfLines={1}>Hi Im Peter</Heading>
    <Heading as="h1">A frontend developer specialised in React</Heading> 
  </VStack>
  
  </FullScreenSection>
);

export default LandingSection;
