import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavToProps {
  endpoint: string;
  text: string;
}

export default function NavTo({ text, endpoint }: NavToProps) {
  return <LinkContainer to={endpoint}>{text}</LinkContainer>;
}

const LinkContainer = styled(NavLink)`
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
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
