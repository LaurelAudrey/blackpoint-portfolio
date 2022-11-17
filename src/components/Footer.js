import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col sm='4'>
                        <h5>LINKS</h5>
                        Home
                        <br />
                        About Us 
                        <br />
                        Resources
                        <br />
                        Contact
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5>SOCIAL</h5>
                        <a
                            //className='btn btn-social-icon btn-instagram link-dark'
                            className='btn btn-link link-dark'
                            href='http://instagram.com/blackpointcoach'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <i className='fa fa-lg fa-instagram text-dark' />
                        </a>{' '}
                        <a
                            //className='btn btn-social-icon btn-linkedin link-dark'
                            className='btn btn-link link-dark'
                            href='http://linkedin.com/in/milan-sic-255176251/'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <i className='fa fa-lg fa-linkedin-square text-dark' />
                        </a>{' '}
                        <a
                            //className='btn btn-social-icon btn-facebook link-dark'
                            className='btn btn-link link-dark'
                            href='http://www.facebook.com/blackpointcoach'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <i className='fa fa-lg fa-facebook-square text-dark' />
                        </a>
                    </Col>
                    <Col sm='4' className='right-align'>
                        <h5>CONTACT US </h5>
                        <a
                            role='button'
                            className='btn btn-link link-dark'
                            href='tel:+19703892129'
                        >
                            <i className='fa fa-phone text-dark' /> 1-970-389-2129
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link link-dark'
                            href='mailto:milan@blackpointcoach.com'
                        >
                            <i className='fa fa-envelope-o text-dark' /> milan@blackpointcoach.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer