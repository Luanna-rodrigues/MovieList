import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import StyledContainer from "./StyledComponent/StyledContainer/StyledContainer";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import StyledGridBack from "./StyledComponent/StyledGrid/StyledGridBack";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <StyledGridBack>
          {" "}
          <StyledContainer>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
            </Routes>
          </StyledContainer>
        </StyledGridBack>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
