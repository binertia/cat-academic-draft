import styled from "styled-components";
import { device } from "../../../utils/device";

export default function Container({ children }: conProps) {
  return <NavContainer>{children}</NavContainer>;
}

//type
interface conProps {
  children: React.ReactNode;
}

//style
const NavContainer = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f5f5f5;
  padding-left: 3%;
  padding-right: 3%;
  z-index: 2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

  @media (${device.tablet}) {
    padding-left: 90px;
    padding-right: 30px;
    justify-content: space-between;
    background: pink;
  }
  @media (${device.mobile}) {
    padding-left: 46px;
    background-color: white;
    justify-content: flex-start;
  }

  &::before {
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 84%;
    display: block;
    height: 1px;
    left: 8%;
    right: auto;
    top: 120px;
    background: gray;
  }
`;
