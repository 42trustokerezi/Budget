import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Home } from "./Icons/Home";
import { Reports } from "./Icons/Reports";
import { Charts } from "./Icons/Charts";
import { Budget } from "./Icons/Budget";
import { Profile } from "./Icons/Profile";

const Menu = () => {
  return (
    <div 
      style={{
        width:"100vw",
        height:"5rem",
        justifyContent:"spacebetween",
        backgroundColor:"white",
        boxShadow:"md",
        borderTopColor:"black",
        padding:"1rem",
        display:"flex",
        webkitBoxShadow: "0px -4px 3px rgba(211	211	211)",
        position: "absolute",
        right:"0.1%"
      }}
      
    >
      <Box>
        <Home boxSize={5} />
        <Text fontSize={"xs"}>Home</Text>
      </Box>
      <Spacer />
      <Box>
        <Reports boxSize={4} />
        <Text fontSize={"xs"}>Reports</Text>
      </Box>
      <Spacer />
      <Box>
        <Charts boxSize={7} />
        <Text fontSize={"xs"}>Charts</Text>
      </Box>
      <Spacer />
      <Box>
        <Budget boxSize={4} />
        <Text fontSize={"xs"}>Budget</Text>
      </Box>
      <Spacer />
      <Box>
        <Profile boxSize={4} />
        <Text fontSize={"xs"}>Profile</Text>
      </Box>
    </div>
  );
};

export default Menu;
