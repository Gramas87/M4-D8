// Assigned to LUCA
/*

*/
import {Navbar, Nav, Image } from "react-bootstrap"
import {FiSearch} from "react-icons/fi"
import {BsBell} from 'react-icons/bs'
import NetflixLogo from "../data/netflix_logo.png"
import AvatarLogo from "../data/avatar.png"
import './MyNavbar.css'
import {Link, useLocation, useNavigate} from "react-router-dom"
const MyNavbar = (prop) => {
    const {textColor, textMargin}=prop

    const location = useLocation()

    const navigate = useNavigate()

    return (
            <Navbar bg="dark"  expand="lg" id="nav">
                <Image className='netflixLogo'  src={NetflixLogo}rounded />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" id="home" style={{color: textColor}} >Home</Nav.Link>
                        <Link to="/tv-shows">
                        <div style={{color: textColor}} >Tv Shows</div>
                        </Link>
                        <Nav.Link href="#link2" style={{color: textColor}} >Movies</Nav.Link>
                        <Nav.Link href="#link3" style={{color: textColor}} >Recently Added</Nav.Link>
                        <Nav.Link href="#link4" style={{color: textColor}} >My List</Nav.Link>
                    </Nav>
                    <FiSearch style={{color:textColor, margin: textMargin}}/>
                    <div style={{color: textColor, margin: textMargin}}>KIDS</div>
                    <BsBell style={{color:textColor, margin: textMargin}}/>
                    <Image className='avatarLogo mr-3' src={AvatarLogo} rounded />
                </Navbar.Collapse>
            </Navbar>
    )
}

export default MyNavbar