import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import NetflixBody from "./components/NetflixBody";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App(prop) {
  return (
    <BrowserRouter>
      <MyNavbar textColor="white" textMargin="10px" />
      

      <Routes>
      <Route path='/' element={<NetflixBody />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path="/movieDetails:movieId" element={<MovieDetails />} />
      </Routes>
      <NetflixBody />
      <MyFooter />
    </BrowserRouter>
    
  );
}

export default App;
