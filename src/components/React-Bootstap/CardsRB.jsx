import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCardsExample({title, text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCardsExample;