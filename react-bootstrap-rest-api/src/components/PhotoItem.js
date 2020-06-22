import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                <Button disabled={props.isDeleteDisabled} onClick={(evt) => props.deleteItem(props.id, evt)} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
       </Col>
    );
}

export default photoitem;