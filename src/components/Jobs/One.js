import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function One(props) {
  return (
    <div className='mb-3'>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.Description}
        </Card.Text>
        <Button variant="primary">Click Here to apply</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default One;