import { DISPLAYS } from "../../app/shared/DISPLAYS"
import { Col, Row } from 'reactstrap'
import DisplayCard from "./DisplayCard"

const DisplayList = () => {
    return (
        <Row className='ms-auto'>{DISPLAYS.map((display) => {
            return (
                <Col md='4' key={display.id}>
                    <DisplayCard display={display} />
                </Col>
            )
        })}</Row>
    )
}

export default DisplayList