import styled from "styled-components";
import { useState } from "react";

import { ReactComponent as Star } from "./assets/star.svg";
import { ReactComponent as Recent } from "./assets/recent.svg";
import MainImg from "./assets/cat/catMain.jpg";
import SideOne from "./assets/cat/festival.jpg";
import SideTwo from "./assets/cat/sideTwo.jpg";
import SideThree from "./assets/cat/catSide.png";

export default function DashBoard() {
  const [isClick, setIsClick] = useState(1);
  return (
    <>
      <Container>
        <ButtonContainer>
          <Button
            onClick={() => setIsClick(1)}
            style={{
              background: isClick ? "#E8DFCA" : "none",
              boxShadow: isClick ? "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" : "",
              borderTop: isClick ? "" : "2px solid #2d4059",
            }}
          >
            <Emo>
              <Star />
            </Emo>
            <Text>Feature</Text>
          </Button>
          <Button
            onClick={() => setIsClick(0)}
            style={{
              background: isClick ? "none" : "#E8DFCA",
              boxShadow: isClick ? "" : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
              borderTop: isClick ? "2px solid #2d4059" : "",
            }}
          >
            <Emo>
              <Recent />
            </Emo>
            <Text>Recent</Text>
          </Button>
        </ButtonContainer>
        <Blank />
        <MainContent>
          <Title>Privilege life</Title>
          <Content>Learn how to destroy and escape from crime scene</Content>
        </MainContent>
        <SideContentOne>
          <SideTitle>Festival</SideTitle>
        </SideContentOne>
        <SideContentTwo>
          <SideTitle>Work Life Balance</SideTitle>
        </SideContentTwo>
        <SideContentThree>
          <SideTitle>Science and technology</SideTitle>
        </SideContentThree>
        <TextContent
          style={{
            gridArea: "text1",
            fontFamily: "font-family: 'Reem Kufi Fun', sans-serif;",
          }}
        >
          The Kagurazaka Bakeneko Festival{" "}
          <div
            style={{ fontSize: "17px", marginTop: "10px", color: "#2D4059" }}
          >
            is one of the most popular Halloween parades held in Tokyo every
            year in October.
          </div>
        </TextContent>
        <TextContent style={{ gridArea: "text2" }}>
          A good work-life balance
          <div
            style={{ fontSize: "17px", marginTop: "10px", color: "#2D4059" }}
          >
            said Chris Chancey, career expert and CEO of Amplio Recruiting, has
            numerous positive effects.
          </div>
        </TextContent>
        <TextContent style={{ gridArea: "text3" }}>
          that plant is Nepeta cataria
          <div
            style={{ fontSize: "17px", marginTop: "10px", color: "#2D4059" }}
          >
            a shrub in the mint family. It's native to Europe and Asia but now
            grows wildly across the Americas as well, along roads and highways.
          </div>
        </TextContent>
      </Container>
    </>
  );
}

//style
const Container = styled.div`
  width: 100%;
  height: 900px;
  display: grid;
  background: #eeeeee;
  grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1.8fr 2fr 2fr 2fr;
  grid-template-areas:
    "sidebar blank blank blank"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar text1 text2 text3";
  grid-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 10%;
  padding-left: 5%;
  padding-top: 100px;
`;
const Blank = styled.span`
  content: "";
  width: 700px;
  grid-area: blank;
`;
//style button
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  height: 70px;
  margin-left: 20%;
  margin-right: 20px;
  margin-bottom: 10px;
  background: none;
  border: none;
  border-bottom: 2px solid #2d4059;
  cursor: pointer;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    &:first-child,
    :last-child {
      background-size: 100% var(--bg-h);
      background-position-x: left;
    }
  }
`;
const Text = styled.h5`
  cursor: pointer;
  background: linear-gradient(0deg, black, black) no-repeat right bottom / 0
    var(--bg-h);
  transition: background-size 350ms, color 290ms ease-in-out;
  --bg-h: 100%;
  padding-bottom: 0px;
  --bg-h: 2px;
  &:hover {
    background-size: 100% var(--bg-h);
    background-position-x: left;
  }
`;

const Emo = styled.div`
  opacity: 0.6;
  transition: 2.5 ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

//style content
const MainContent = styled.div`
  margin-bottom: 1rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 15px rgba(231, 215, 215, 0.4);
  transition: 500ms ease-in-out;

  grid-area: main;
  padding: 0.25rem;

  background-image: url(${MainImg});
  background: linear-gradient(
      0deg,
      #000000 0%,
      #121212 4%,
      rgba(40, 40, 40, 0.28) 30%
    ),
    url(${MainImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;
  &:hover {
    background-position: center center;
  }
`;
//side content
const SideContentOne = styled.div`
  background: blue;

  border-radius: 5px;
  overflow: hidden;

  transition: 500ms ease-in-out;

  padding: 0.25rem;
  background-image: url(${SideOne});
  background: linear-gradient(
      0deg,
      #000000 0%,
      #121212 4%,
      rgba(40, 40, 40, 0.28) 30%
    ),
    url(${SideOne});
  background-repeat: no-repeat;

  background-position: center 40%;
  &:hover {
    background-position: center center;
  }
`;

const SideContentTwo = styled.div`
  background: blue;

  border-radius: 5px;
  overflow: hidden;

  transition: 500ms ease-in-out;

  padding: 0.25rem;

  background-image: url(${SideTwo});
  background: linear-gradient(
      0deg,
      #000000 0%,
      #121212 4%,
      rgba(40, 40, 40, 0.28) 30%
    ),
    url(${SideTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;
  &:hover {
    background-position: center center;
  }
`;
const SideContentThree = styled.div`
  border-radius: 5px;
  overflow: hidden;
  transition: 500ms ease-in-out;
  padding: 0.25rem;
  background-image: url(${SideThree});
  background: linear-gradient(
      0deg,
      #000000 0%,
      #121212 4%,
      rgba(40, 40, 40, 0.28) 30%
    ),
    url(${SideThree});
  background-repeat: no-repeat;
  background-size: 170%;
  background-position: center 40%;
  &:hover {
    background-position: center center;
  }
`;

// text
const Title = styled.div`
  cursor: pointer;
  position: relative;
  top: 60%;
  left: 10%;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 10px black;
`;

const Content = styled.div`
  cursor: pointer;
  position: relative;
  width: 30%;
  color: white;
  top: 65%;
  left: 10%;
  font-size: 1.4rem;
  font-weight: 500;
  text-shadow: 0 0 10px black;
`;

const SideTitle = styled.div`
  cursor: pointer;
  position: relative;
  width: 40%;
  top: 10px;
  left: 5%;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 10px black;
`;
const TextContent = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-weight: 500;
  width: 80%;
  font-size: 20px;
  color: black;
  margin-top: 20px;
  margin-left: 20px;
`;
// side content
