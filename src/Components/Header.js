import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  height: "80px",
  boxShadow: "black 0 1px 2px 0",
  margin:"0 0 30px 0px"
});

const TitleWrapper = styled("div")({
  margin: "4px 0 0 20px",
  flex: "1",
  textShadow: "grey 0 1px 2px",
});

const LinkWrapper = styled("div")({
  flex: "1",
  alignContent: "flex-end",
  margin: "25px 30px 0 0",
  textDecoration: "none",
  textAlign:"end"
});

const NavBarLink = styled("a")({
  textDecoration: "none",
  marginLeft:"8px",
  fontSize:"20px",
  fontWeight:"500",
  color:"#6082B6",
  textShadow:"black 0 0.5px 0.5px"
});

function Header() {
  return (
    <Container>
      <TitleWrapper>
        <h2>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="http://localhost:3000/"
          >
            My App
          </a>
        </h2>
      </TitleWrapper>
      <LinkWrapper>
        <NavBarLink href="http://localhost:3000/users"> Users</NavBarLink>
        <NavBarLink href="http://localhost:3000/products"> Products</NavBarLink>
      </LinkWrapper>
    </Container>
  );
}

export default Header;
