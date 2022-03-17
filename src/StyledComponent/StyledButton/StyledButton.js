import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    width: 300px;
    background-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.darkgrey};
  }
`;

export default StyledButton;
