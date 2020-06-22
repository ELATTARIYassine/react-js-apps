import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';

const photoitem = ({title, thumbnailUrl}) => {
    return (
       <Col md="auto">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary">Edit</Button> |&nbsp;
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
       </Col>
    );
}

export default photoitem;