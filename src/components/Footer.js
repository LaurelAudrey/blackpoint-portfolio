import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>This will be site navigation!</h5>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                    <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/blackpointcoach'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/blackpointcoach'
                        >
                            <i className='fa fa-facebook' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                    <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+19703892129'
                        >
                            <i className='fa fa-phone' /> 1-970-389-2129
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:milan@blackpointcoach.com'
                        >
                            <i className='fa fa-envelope-o' /> milan@blackpointcoach.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer