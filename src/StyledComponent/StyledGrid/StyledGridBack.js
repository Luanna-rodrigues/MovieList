import styled from "styled-components";
import { Grid } from "@material-ui/core";

const StyledGridBack = styled(Grid)`
  background-color: ${(props) => props.theme.colors.darkgrey};
`;

export default StyledGridBack;
