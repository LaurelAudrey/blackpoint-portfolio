import { Navbar, NavbarBrand } from 'reactstrap'
import BP_Logo from '../app/assets/img/BP_Logo.png'

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                    <img src={BP_Logo} alt='blackpoint logo' class='float-start' />
                    <h2>BLACKPOINT</h2>
                    <h3>Incremental improvement. Lasting Change.</h3>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header