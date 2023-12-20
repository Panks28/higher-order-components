import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";

function Home() {
  const MainBody = styled("div")({
    textAlign:"center",
    margin:"40px 0 0 0",
    fontSize:"40px",
    fontFamily:"Cursive",
    color:"#36454F",
    textShadow:"black 0.5px 0.5px 0.5px"
  });

  return (
    <>
      <Header />
      <MainBody>Welcome to My App!</MainBody>
    </>
  );
}

export default Home;
