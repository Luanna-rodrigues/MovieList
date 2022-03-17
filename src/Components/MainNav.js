import React, { useEffect } from "react";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useNavigate } from "react-router-dom";
import { StyledBottom, StyledBottomAct } from "../StyledComponent";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <StyledBottom
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <StyledBottomAct label="Trending" icon={<WhatshotIcon />} />
      <StyledBottomAct label="Movies" icon={<MovieFilterIcon />} />
      <StyledBottomAct label="TV Series" icon={<LocalMoviesIcon />} />
    </StyledBottom>
  );
}
