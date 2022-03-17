import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTitleTag = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    font-size: 2.5em;
    padding-top: 30px;
    padding-bottom: 50px;
    color: ${(props) => props.theme.colors.gold};
    line-height: 1.5;
  }
`;

export default StyledTitleTag;
