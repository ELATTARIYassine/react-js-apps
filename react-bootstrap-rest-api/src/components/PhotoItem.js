import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import services from '../services/services';

const photoitem = (props) => {
    return (
       <Col md="auto">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnailUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Link to={`/edit/${props.id}`}>
                    <Button variant="primary">Edit</Button>
                </Link> |&nbsp;
                <Button onClick={() => props.deleteItem(props.id)} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
       </Col>
    );
}

export default photoitem;