import styled from "styled-components";
import { ReactComponent as PicLogo } from "../assets/logo.svg";

export default function Logo() {
  return (
    <Container>
      <LogoContainer>
        <PicLogo />
      </LogoContainer>
      <Name>Cat Academic</Name>
    </Container>
  );
}

const LogoContainer = styled.div`
  padding-top: 10px;
  width: 70px;
  height: 70px;
  margin-left: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  width: 320px;
`;

const Name = styled.h1`
  font-family: "Reem Kufi", sans-serif;
`;
