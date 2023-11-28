import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { More } from "./Icons/More";
import { Naira } from "./Icons/Naira";

const Budget = () => {
  return (
    <Box w="100%">
      <Grid>
        <Heading as="h2" size="2xl">
          Budget
        </Heading>
        <Flex alignItems={"center"}>
          <Grid
            backgroundColor={"#0466C833"}
            width={"1rem"}
            height={"1rem"}
            rounded={"50%"}
            mt={"1rem"}
          >
            <Naira boxSize={2} color={"#0466C8"} m={"auto"} />
          </Grid>
          <Text mt={"1rem"} fontSize={"xs"} ml={"0.5rem"} color={"#707480"}>
            Monthly Budget
          </Text>
        </Flex>

        <Box
          mt={"1rem"}
          width={"100%"}
          height={"3rem"}
          alignItems={"Start"}
          boxShadow={"md"}
          rounded={"sm"}
          pt={"1rem"}
          pl={"1rem"}
          fontSize={"lg"}
          as="b"
        >
          <Naira boxSize={4} color={"#001233"} />
          120,000
        </Box>

        <Flex
          justifyContent={"space-between"}
          alignContent={"center"}
          mt={"2rem"}
        >
          <Box>
            <Text fontSize="xs" as="b" color="#707480">
              Last Month
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" as="b" color="#0466C8">
              This Month
            </Text>
          </Box>

          <More boxSize={3} mt="0.5rem" />
        </Flex>
      </Grid>

      {/* Progress */}
      <Grid mt="3rem" width="100%">
        <Box
          width="7rem"
          height="7rem"
          rounded="50%"
          border="solid"
          borderColor="#0466C866"
          borderWidth="0.5em"
          mx="auto"
        >
          <Box
            width="3rem"
            height="6rem"
            mx={"auto"}
            // size="100%"
            // value={49}
            // color="#0466C8"
            alignItems={"center"}
            ml={"3rem"}
            borderTopRightRadius={"110px"}
            borderBottomRightRadius={"110px"}
            // rounded="50% 50% 0 0"
            border="solid"
            borderColor="#0466C8"
            borderWidth="thick"
            borderLeft={"0"}
            position={"relative"}
            // transform="rotate(calc(((var(--1) - 50) * 0.01turn)))"
          >
            <Text
              fontSize="2xl"
              as="b"
              color={"#0466C8"}
              position={"absolute"}
              top={"30%"}
              right={"30%"}
            >
              49%
            </Text>
            {/* <Text fontSize="large">49%</Text> */}
          </Box>
        </Box>

        <Text as="sub" color={"#707480"} mt={"1rem"} mx="auto">
          Amount spent so far
        </Text>
        <Flex
          width="50%"
          m="auto"
          pt={"1rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box color={"#0466C8"} mr={"0.3rem"}>
            <Naira boxSize={2} mt={"0.4em"} color={"#0466C8"} />
            <Text as="sub">50,000</Text>
          </Box>
          <Text as="sub" color={"#67A2DC"}>
            /
          </Text>
          <Box color={"#67A2DC"} ml={"0.3rem"}>
            <Naira boxSize={2} mt={"0.4em"} color={"#67A2DC"} />
            <Text as="sub">120,000</Text>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Budget;
