import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTitleDesc = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5em;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    line-height: 1.5;
  }
`;

export default StyledTitleDesc;
