import './App.css'
import { Container, Row, Col } from 'reactstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className='App'>
            <Header />
            <Container>
              <Row>
                <Col className='text-center'>
                  <br />
                  <h3>HomePage coming soon...</h3>
                  <br />
                </Col>
              </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App