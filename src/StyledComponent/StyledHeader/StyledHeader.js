import styled from "styled-components";
import { TableHead } from "@material-ui/core";

const StyledHeader = styled(TableHead)`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  font-size: 5em;
  font-family: fantasy;
  z-index: 50;
  padding-left: 25%;
  padding-right: 25%;
  color: ${(props) => props.theme.colors.darkgrey};
  background-color: ${(props) => props.theme.colors.yellow};
`;

export default StyledHeader;
