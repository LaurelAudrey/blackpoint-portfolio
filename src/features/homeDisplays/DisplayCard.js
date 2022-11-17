import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'

const DisplayCard = ({ display }) => {
    const { image, name, description } = display
    return (
        <Card>
            <CardImg
                width='33%'
                src={image}
                alt={name}
            />
            <CardBody className='text-center'>
                <CardTitle>
                    <h4>{name}</h4>
                </CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard