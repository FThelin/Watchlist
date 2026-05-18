import Footer from "./components/layout/Footer/Footer.tsx";
import Header from "./components/layout/Header/Header.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import MoviePage from "./pages/Movies/MoviePage.tsx";
import SeriesPage from "./pages/Series/SeriesPage.tsx";
import Watchlist from "./pages/Watchlist/Watchlist.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContentDetails from "./pages/ContentDetails/ContentDetails.tsx";
import WatchListProvider from "./context/WatchlistContext.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/:contentType/:id" element={<ContentDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </WatchListProvider>
  );
};

export default App;
