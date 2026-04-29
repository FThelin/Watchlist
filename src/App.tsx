import { useState } from "react";
import Footer from "./components/layout/Footer/Footer.tsx";
import Header from "./components/layout/Header/Header.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import MoviePage from "./pages/Movies/MoviePage.tsx";
import SeriesPage from "./pages/Series/SeriesPage.tsx";
import Watchlist from "./pages/Watchlist/Watchlist.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const changePage = (page: string) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "home": {
        return <HomePage />;
      }
      case "movies": {
        return <MoviePage />;
      }
      case "series": {
        return <SeriesPage />;
      }
      case "watchlist": {
        return <Watchlist />;
      }
      default: {
        return <HomePage />;
      }
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Header changePage={changePage} />
      {renderPage()}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
