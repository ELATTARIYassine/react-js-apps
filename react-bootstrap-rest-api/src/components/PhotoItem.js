import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const photoitem = ({id, title, thumbnailUrl}) => {
    return (
       <Col md="auto">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/edit/${id}`}>
                    <Button variant="primary">Edit</Button>
                </Link> |&nbsp;
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
       </Col>
    );
}

export default photoitem;