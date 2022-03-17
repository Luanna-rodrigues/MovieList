import styled from "styled-components";
import { Container } from "@material-ui/core";

const StyledContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${(props) => props.theme.colors.darkgrey};
  padding-left: 50px;
`;

export default StyledContainer;
