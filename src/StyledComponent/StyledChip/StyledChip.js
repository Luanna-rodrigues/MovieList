import styled from "styled-components";
import { Chip } from "@material-ui/core";

const StyledChip= styled(Chip)`
  && {
    
    background-color: ${(props) => props.theme.colors.gold};
    color: ${(props) => props.theme.colors.darkgrey};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    width: 140px;
  }
`;

export default StyledChip;
