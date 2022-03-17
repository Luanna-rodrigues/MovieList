import styled from "styled-components";
import { Grid } from "@material-ui/core";

const StyledGridSea = styled(Grid)`
  background-color: ${(props) => props.theme.colors.darkgrey};
  height: 100vh;
`;

export default StyledGridSea;
