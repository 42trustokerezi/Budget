import "./App.css";

import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Budget from "./components/Budget";
import Category from "./components/Category";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="" style={{position:"relative"}}>
      <Box
        width={"100vw"}
        //height={"100vh"}
        px="1.5em"
      >
        <Navbar />
        <Budget />
        <Category />
        <Menu />
      </Box>
    </div>
  );
}

export default App;
