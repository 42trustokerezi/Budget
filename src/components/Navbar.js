import React from "react";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Bar } from "./Icons/Bar";
import { Wifi } from "./Icons/Wifi";
import { Battery } from "./Icons/Battery";

const Navbar = () => {
  return (
    <Flex 
        width="100%" 
        height="100px"
        pt="2rem"
    >
      <Text>9:41</Text>
      <Spacer />
      <Box>
        <HStack>
          <Bar boxSize={4} />
          <Wifi boxSize={4} />
          <Battery boxSize={4} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
