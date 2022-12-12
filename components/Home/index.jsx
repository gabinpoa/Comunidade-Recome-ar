import React from "react";
import Background from "./Background";
import Header from "./Header";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainContent from "./MainContent";

function Home() {
  return (
    <Background>
      <Header />
      <MainContent />
    </Background>
  );
}

export default Home;
