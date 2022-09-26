import Container from "./module/container";
import NavTo from "./module/link";
import Logo from "./module/logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <ExtraNav>
        <ExtraLinkContainer>
          <NavTo text="About" endpoint="about" />
          <NavTo text="Event" endpoint="error" />
          <NavTo text="for you" endpoint="error" />
        </ExtraLinkContainer>
      </ExtraNav>
      <Container>
        <NavLink to="/" style={linkStyle}>
          <Logo />
        </NavLink>
        <FlexBoxContainer>
          <NavTo text="RESEARCH" endpoint="research" />
          <NavTo text="CATTOPIA" endpoint="error" />
          <NavTo text="JOIN CAT" endpoint="error" />
        </FlexBoxContainer>
      </Container>
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

//style
const ExtraNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
`;

const ExtraLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Quicksand", sans-serif;
  font-weight: 200;
  margin-top: 16px;
  width: 25%;
  padding-right: 80px;
`;

const FlexBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  font-weight: 600;
  width: 48%;
  font-family: "Reem Kufi Fun", sans-serif;
`;
