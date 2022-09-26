import styled from "styled-components";

export default function Motto() {
  return (
    <Container>
      <BigText>
        What we gave back <br />
        to our world
      </BigText>
      <Line />
      <SmallText>
        Made 10million job around the world by destroy old TV & furniture.
        <br />
        Protect human child from catnip.
      </SmallText>
    </Container>
  );
}

export const Container = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeeee;
`;
export const Line = styled.span`
  display: block;
  width: 10px;
  border-top: 100px solid #ea5455;
`;

export const BigText = styled.h1`
  color: #2d4059;
  margin-left: 3%;
`;

export const SmallText = styled.h4`
  font-size: 2rem;
  margin-left: 100px;
  font-family: "Estonia", cursive;
`;
