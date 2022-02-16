import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import NetflixBody from "./components/NetflixBody";
import './App.css';


function App( prop) {
  return (
    <>
  <MyNavbar textColor='white' textMargin='10px'/>
  <NetflixBody />
  <MyFooter />

    </>
  );
}

export default App;
