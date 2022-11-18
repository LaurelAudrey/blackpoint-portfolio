import { useState } from 'react'
import { 
    Navbar, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem 
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const SubHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto text-light' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/resources'>
                            <i className='fa fa-book fa-lg' /> Resources
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default SubHeader