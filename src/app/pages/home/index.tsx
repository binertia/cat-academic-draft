import styled from "styled-components";
import BgVideo from "./component/bg-video";
import DashBoard from "./component/dashboard";
import Hero from "./component/hero";
import Invite from "./component/invite";
import LastMotto from "./component/LastMotto";
import Talent from "./component/meettalent";
import Motto from "./component/Motto";

export default function Home() {
  return (
    <Container>
      <BgVideo />
      <Hero />
      <Motto />
      <DashBoard />
      <Talent />
      <Invite />
      <LastMotto />
    </Container>
  );
}

//style
const Container = styled.div`
  width: 100%;
`;
