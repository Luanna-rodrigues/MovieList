import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";
import useGenre from "../../hooks/useGenre";
import {
  StyleFirstTitle,
  StyledGrid,
  StyledFirstGrid,
  StyledBottomGrid,
} from "../../StyledComponent";
import Grid from "@material-ui/core/Grid";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [genreforURL, page]);

  return (
    <Grid container justifyContent="center">
      <StyledFirstGrid container>
        <StyleFirstTitle>Movies</StyleFirstTitle>
      </StyledFirstGrid>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

      {content &&
        content.map((c) => (
          <StyledGrid>
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          </StyledGrid>
        ))}

      <StyledBottomGrid container>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </StyledBottomGrid>
    </Grid>
  );
};

export default Movies;
