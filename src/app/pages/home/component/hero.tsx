import styled from "styled-components";
import { ReactComponent as HeroLink } from "./assets/menu2.svg";
export default function Hero() {
  return (
    <Container>
      <ExtraHero>
        <div>The smallest feline</div>
        <div>is a masterpiece.</div>
      </ExtraHero>
      <HeroText>
        <div>Encourage cat spirit !</div>
        <div>Stop being an adorable creature. And start live you dream</div>
        <HeroLink style={{ cursor: "pointer" }} />
      </HeroText>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 790px;
`;

const ExtraHero = styled.div`
  display: block;
  width: 100%;
  height: 100px;
  background: #eeeeee;
  bottom: 30px;
  font-size: 2rem;
  text-align: center;
  padding-top: 10px;
`;
const HeroText = styled.div`
  display: block;
  width: 45%;
  margin-bottom: 0px;
  position: -webkit-sticky;
  position: sticky;
  top: 540px;
  left: 5%;
  font-size: 2.6rem;
  color: white;
  font-family: "Reem Kufi", sans-serif;
`;
