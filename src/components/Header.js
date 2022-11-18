import { useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import BP_Logo from '../app/assets/img/BP_Logo.png'

const Header = () => {

    return (
        <Navbar light color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                    <img src={BP_Logo} alt='blackpoint logo' class='float-start' />
                    <h2>BLACKPOINT</h2>
                    <h5>Incremental improvement.<br/>Lasting Change.</h5>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header