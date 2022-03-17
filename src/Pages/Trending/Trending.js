import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import Grid from "@material-ui/core/Grid";
import {
  StyledGrid,
  StyleFirstTitle,
  StyledFirstGrid,
  StyledBottomGrid,
} from "../../StyledComponent";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  return (
    <Grid container justifyContent="center">
      <StyledFirstGrid container>
        <StyleFirstTitle>Trending</StyleFirstTitle>
      </StyledFirstGrid>
      {content &&
        content.map((c) => (
          <StyledGrid>
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          </StyledGrid>
        ))}

      <StyledBottomGrid container>
        <CustomPagination setPage={setPage} />
      </StyledBottomGrid>
    </Grid>
  );
};

export default Trending;
