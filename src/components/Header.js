import { Navbar, NavbarBrand } from 'reactstrap'
import BP_Logo_Round from '../app/assets/img/BP_Logo_Round.png'

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={BP_Logo_Round} alt='blackpoint logo' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header