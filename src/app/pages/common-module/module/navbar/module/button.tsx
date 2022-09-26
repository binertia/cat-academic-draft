import styled from "styled-components";

export default function Button({ id, pic }: ButtonProps) {
  <Container>
    {id} , {pic}
  </Container>;
}

//type
interface ButtonProps {
  id: number;
  pic: string;
}

//style
const Container = styled.div`
  color: black;
  background-color: pink;
  width: 100%;
  font-size: 22rem;
`;
