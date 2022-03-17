import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const StyledBottom = styled(BottomNavigation)`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    color: ${(props) => props.theme.colors.darkgrey};
    background-color: ${(props) => props.theme.colors.yellow};
    z-index: 110;
  }
`;

export default StyledBottom;
