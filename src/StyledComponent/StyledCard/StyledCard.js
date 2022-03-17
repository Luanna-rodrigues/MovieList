import styled from "styled-components";
import { Card } from "@material-ui/core";

const StyledCard = styled(Card)`
  && {
    width: 300px;
    min-height: 570px;
    background-color: ${(props) => props.theme.colors.gold};
    border-radius: 10px;
  }
`;

export default StyledCard;
