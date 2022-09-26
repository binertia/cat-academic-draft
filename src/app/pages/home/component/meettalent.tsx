import { BigText, Container, SmallText, Line } from "./Motto";
import styled from "styled-components";
import Collab from "./assets/cat/catcollab.jpg";
import Impact from "./assets/cat/catimpact.jpg";
import Innovate from "./assets/cat/catinnovate.jpg";

import { ReactComponent as Earth } from "./assets/earth.svg";
import { ReactComponent as Atom } from "./assets/atom.svg";
import { ReactComponent as Brain } from "./assets/brain.svg";

export default function Talent() {
  return (
    <>
      <Container style={{ background: "#f5f5f5", paddingTop: "90px" }}>
        <BigText>
          Cat Always <br />
          Make Big Change
        </BigText>
        <Line />
        <SmallText>
          Usually a magical cat will be intelligent, but even non-sapient
          <br />
          sapient cats can have magical powers,with some even have Dog
          capabilities.
        </SmallText>
      </Container>
      <TalentContainer>
        <FlexBox>
          <TopicText>Innovate</TopicText>
          <Atom />
          <ImgContainerOne />
          <TitleText>Charting new research directions through data</TitleText>
          <ContentText>
            Economics faculty are using new methods to answer critical questions
            about government, health and medicine, media, and infrastructure.{" "}
          </ContentText>
          <LinkText>Catconomic -{">"}</LinkText>
        </FlexBox>
        <FlexBox>
          <TopicText>Impact</TopicText>
          <Brain />
          <ImgContainerTwo />
          <TitleText>Advancing well-being for all cat</TitleText>
          <ContentText>
            Cat’s Academy of Public Health prepares tomorrow’s leaders to
            respond to the world’s most urgent health challenges.
          </ContentText>
          <LinkText>School of Paws -{">"}</LinkText>
        </FlexBox>
        <FlexBox>
          <TopicText>Collaborate</TopicText>
          <Earth />
          <ImgContainerThree />
          <TitleText>Empowering students through the Open Curriculum</TitleText>
          <ContentText>
            Cat’s flexible yet rigorous approach to education pushes
            undergraduates to be deeply creative thinkers, intellectual
            risk-takers and entrepreneurial problem-solvers.{" "}
          </ContentText>
          <LinkText>House of cats -{">"}</LinkText>
        </FlexBox>
      </TalentContainer>
    </>
  );
}

//style
const TalentContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const FlexBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
`;

const TopicText = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  color: #ea5455;
  margin-bottom: 20px;
`;

const ImgContainerOne = styled.div`
  width: 80%;
  height: 200px;
  margin-top: 60px;
  border-radius: 5px;
  background-image: url(${Innovate});
  background-position: center 8%;
  background-size: 100%;
  background-repeat: no-repeat;
`;
const ImgContainerTwo = styled.div`
  width: 80%;
  height: 200px;
  margin-top: 60px;
  border-radius: 5px;
  background-image: url(${Impact});
  background-position: center 8%;
  background-size: 130%;
  background-repeat: no-repeat;
`;
const ImgContainerThree = styled.div`
  width: 80%;
  height: 200px;
  margin-top: 60px;
  border-radius: 5px;
  background-image: url(${Collab});
  background-position: center 8%;
  background-size: 110%;
  background-repeat: no-repeat;
`;

const TitleText = styled.div`
  padding: 28px;
  padding-left: 13%;
  padding-right: 13%;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

const ContentText = styled.div`
  padding-left: 13%;
  padding-right: 13%;
  font-family: Times New Roman, sans-serif;
  font-size: 1rem;
  color: grey;
`;

const LinkText = styled.a`
  color: red;
  align-self: flex-start;
  font-family: "Quicksand", sans-serif;

  margin-left: 13%;
  margin-top: 20px;
  font-size: 1rem;

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
    color: #ea5455;
  }
`;
