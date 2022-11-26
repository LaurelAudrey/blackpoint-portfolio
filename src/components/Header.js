import { Navbar, NavbarBrand } from 'reactstrap'
import BP_Logo from '../app/assets/img/BP_Logo.png'
import ConsultForm from '../features/consultations/ConsultForm'

const Header = () => {

    return (
        <Navbar light color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                    <img src={BP_Logo} alt='blackpoint logo' class='float-start' />
                    <h1 className='mt-2'>BLACKPOINT COACHING</h1>
                    <h5 className='mt-2'>&emsp;&ensp;. . incremental improvement for lasting change . .</h5>
            </NavbarBrand>
            <ConsultForm className='float-right' />
        </Navbar>
    )
}

export default Header