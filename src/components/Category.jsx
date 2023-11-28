import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Naira } from "./Icons/Naira";
import { Food } from "./Icons/Food";
import { Savings } from "./Icons/Savings";

const Category = () => (
    <Box mt={"3rem"}>
        <Heading as={"h4"} size={"md"}>
            Category Breadkdown
        </Heading>
        <Box mt={"2rem"}>
            {/* Food and drinks */}
            <Flex>
                <Flex width="100%">
                    <Flex width="100%" ml={"0.5rem"}>
                        <Box width={"2rem"} alignContent={"center"}>
                            <div
                                style={{
                                    width: "1.5rem",
                                    height: "1.25rem",
                                    border: "solid",
                                    borderColor: "#C89104",
                                    borderWidth: "3px",
                                    position: "relative",
                                    // borderTopRightRadius: "210px",
                                    // borderBottomRightRadius: "210px",
                                    borderRadius: " 0 300px 0 0",
                                    borderLeft: 0,
                                    borderBottom: 0,
                                    margin: "auto"
                                }}
                            >
                                <Grid
                                    alignItems={"center"}
                                    width="2.15rem"
                                    height="2.1rem"
                                    backgroundColor={"#F4E9CD"}
                                    position="relative"
                                    rounded={"full"}
                                    right="65%"
                                    top="1%"
                                >
                                    <Food m="auto" boxSize={4} />
                                </Grid>
                            </div>
                        </Box>
                        <Box px="0.2rem">
                            <Text fontSize="xs">Food and Drink</Text>
                            <Text fontSize={"small"}>40%</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    width="100%"
                    ml="0.5rem"
                    // pt={"1rem"}
                    alignItems={"start"}
                >
                    <Box color={"#001233"} mr={"0.3rem"} fontSize={"xs"}>
                        <Naira boxSize={2} color={"#001233"} />
                        50,000
                    </Box>
                    <Text as="sub" mt={"0.4rem"} color={"#67A2DC"}>
                        /
                    </Text>
                    <Box color={"#C1C4CD"} ml={"0.3rem"} fontSize={"xs"}>
                        <Naira boxSize={2} color={"#C1C4CD"} />
                        50,000
                    </Box>
                </Flex>
            </Flex>
            {/* Savings */}
            <Flex mt={"1rem"}>
                <Flex width="100%">
                    <Flex width="100%" ml={"0.5rem"}>
                        <Box width={"2rem"} alignContent={"center"}>
                        <div
                            style={{
                                width: "1.5rem",
                                    height: "1.25rem",
                                    border: "solid",
                                    borderColor: "#038A39",
                                    borderWidth: "3px",
                                    position: "relative",
                                    // borderTopRightRadius: "210px",
                                    // borderBottomRightRadius: "210px",
                                    borderRadius: " 0 300px 0 0",
                                    borderLeft: 0,
                                    borderBottom: 0,
                                    margin: "auto"
                            }}
                        >
                            <Grid
                                alignItems={"center"}
                                    width="2.15rem"
                                    height="2.1rem"
                                    backgroundColor={"#038A3933"}
                                    position="relative"
                                    rounded={"full"}
                                    right="65%"
                                    top="1%"
                            >
                                <Savings m="auto" boxSize={4} />
                            </Grid>
                        </div>
                        </Box>
                        <Box px="0.2rem">
                            <Text fontSize="xs">Savings</Text>
                            <Text fontSize={"small"}>20%</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    width="100%"
                    ml="0.5rem"
                    // pt={"1rem"}
                    alignItems={"start"}
                >
                    <Box color={"#001233"} mr={"0.3rem"} fontSize={"xs"}>
                        <Naira boxSize={2} color={"#001233"} />
                        10,000
                    </Box>
                    <Text as="sub" mt={"0.4rem"} color={"#67A2DC"}>
                        /
                    </Text>
                    <Box color={"#C1C4CD"} ml={"0.3rem"} fontSize={"xs"}>
                        <Naira boxSize={2} color={"#C1C4CD"} />
                        240,000
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export default Category;
