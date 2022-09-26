import CatBg from "./assets/catbg.mp4"; // cspell:ignore-line
import styled from "styled-components";
export default function BgVideo() {
  return (
    <Video autoPlay loop muted>
      <source src={CatBg} type="video/mp4" />
    </Video>
  );
}

const Video = styled.video`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: -1;
  filter: brightness(70%);
`;
