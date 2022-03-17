import StyledHeader from "../../StyledComponent/StyledHeader/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <span onClick={() => window.scroll(0, 0)} className="header">
        Lua Movies and Series
      </span>
    </StyledHeader>
  );
};

export default Header;
