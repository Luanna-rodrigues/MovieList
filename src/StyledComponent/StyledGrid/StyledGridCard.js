import styled from "styled-components";
import { Grid } from "@material-ui/core";

const StyledGridCard = styled(Grid)`
  background-color: ${(props) => props.theme.colors.darkgrey};
  border-radius: 10px;
`;

export default StyledGridCard;
