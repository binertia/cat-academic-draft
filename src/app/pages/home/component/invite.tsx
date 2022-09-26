import styled, { keyframes } from "styled-components";
import Img from "./assets/cat/catinvite.jpg";
import { ReactComponent as Fish } from "./assets/fish.svg";
export default function Invite() {
  return (
    <>
      <Bg>
        <ButtonContainer>
          <Text>
            <Fish />
          </Text>
        </ButtonContainer>
      </Bg>
    </>
  );
}

const Bg = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 750px;
  background-size: 100%;
  background-repeat: no-repeat;
  background: url(${Img});
  background: linear-gradient(
      0deg,
      #000000 0%,
      #121212 4%,
      rgba(40, 40, 40, 0.28) 30%
    ),
    url(${Img});
  filter: brightness(90%);
`;
const SlideAnime = keyframes`
  1% {left:1px}
  
  100% {left:550px}
`;

const ButtonContainer = styled.div`
  position: absolute;
  align-items: center;
  top: 50px;
  left: 0px;
  padding: 1rem;
  height: 70px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 300ms ease-in-out;
  opacity: 0.7;
  padding-top: 50px;
  height: 170px;
  width: 100px;
  &:hover {
    opacity: 1;
    animation: ${SlideAnime} 600ms;
    left: 550px;
  }
  &::after {
    content: "";
    width: 400px;
  }
`;

const Text = styled.div`
  cursor: pointer;

  &:hover {
  }
  &::before {
    position: absolute;
    line-height: 100px;
    color: white;
    font-size: 1.3rem;
    content: "scholarship and diverse perspectives cross boundaries.";
    text-shadow: 0 0 10px black;
    width: 800px;
    padding-left: 300px;
    right: 100px;
    height: 200px;
    padding-top: 60px;
    top: -30px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 400px;
    height: 200px;
    padding-bottom: 200px;
    top: -30px;
    right: 100;
  }
`;
