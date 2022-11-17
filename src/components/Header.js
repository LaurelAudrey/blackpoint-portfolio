import { useState } from 'react'
import { 
    Navbar, 
    NavbarBrand, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem 
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import BP_Logo from '../app/assets/img/BP_Logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                    <img src={BP_Logo} alt='blackpoint logo' class='float-start' />
                    <h2>BLACKPOINT</h2>
                    <h4>Incremental improvement.<br/>Lasting Change.</h4>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto text-light' navbar>
                    <NavItem>
                        <i className='fa fa-home fa-lg' /> Home
                    </NavItem>
                    <NavItem>
                        <i className='fa fa-info fa-lg' /> About
                    </NavItem>
                    <NavItem>
                        <i className='fa fa-book fa-lg' /> Resources
                    </NavItem>
                    <NavItem>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header