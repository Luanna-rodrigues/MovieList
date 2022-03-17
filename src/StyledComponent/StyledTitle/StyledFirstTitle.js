import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyleFirstTitle = styled(Typography)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${(props) => props.theme.colors.yellow};
    letter-spacing: 0.00938em;
    font-size: 4em;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.fantasy};
    padding-top: 30px;
  }
`;

export default StyleFirstTitle;
