import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyleTitleTab = styled(Typography)`
  && {
    font-size: 1em;
    font-family: fantasy;
    color: ${(props) => props.theme.colors.white};
  }
`;

export default StyleTitleTab;
