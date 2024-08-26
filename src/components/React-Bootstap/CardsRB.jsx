import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RotatingLoader from '../../loaders/rotatingloader';

function CustomCardsExample({title, text, removeHandler,ind}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg" />
      {/* <RotatingLoader/> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCardsExample;