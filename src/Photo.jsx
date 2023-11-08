
import Card from 'react-bootstrap/Card';

const Photo = (props) => {
  
  return (
    <Card  className='photo'>
      <Card.Img  src={props.photo.src.small}  />

    </Card>
  );
}

export default Photo;