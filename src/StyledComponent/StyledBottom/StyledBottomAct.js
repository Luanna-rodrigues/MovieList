import styled from "styled-components";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const StyledBottomAct = styled(BottomNavigationAction)`
  && {
    display: flex;
    justify-content: center;

    color: ${(props) => props.theme.colors.darkgrey};
  }
`;

export default StyledBottomAct;
