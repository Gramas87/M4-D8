import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import NetflixBody from "./components/NetflixBody";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tvshows from "./components/Tvshows";
import MovieDetails from "./components/MovieDetails";



function App( prop) {
  return (
    <>
  <BrowserRouter>
  <MyNavbar textColor='white' textMargin='10px'/>
  
  <NetflixBody />
  <MyFooter />
  <Routes>
  <Route path="/tv-shows" element={<Tvshows />} />
  <Route path="/movieDetails:movieId" element={<MovieDetails />} />
  </Routes>
  </BrowserRouter>

  
  
    </>
  );
}

export default App;
