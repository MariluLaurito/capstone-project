import Nav from '../Components/Nav'
import '../Styles/Header.css'
import '../Styles/Nav.css'
import logo from '../Assets/icons_assets/logo little lemon.png';

export function Header() {
    return (
        <>
     <header className='header'>
       <div className='logo'>
     <img src={logo} alt="Logo" />
     </div>
     <Nav />
     </header>
     </>
    )
}