import React, {useState} from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import services from '../services/services';

const Addscreen = (props) => {
    const [photoTitle, setphotoTitle] = useState('');
    const [photoURL, setphotoURL] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if(!photoTitle || !photoURL)
            {
                alert('title & url are required!');
                return;
            }
            const photo = {photoTitle, photoURL};
            await services.addPhoto(photo);
            props.history.push('/');
        } catch (error) {
            alert('photo added failed');
            console.log(error);
        }
    }

    return (
        <Container style={{marginTop: 50}}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Photo Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter title" 
                                onChange={e => setphotoTitle(e.target.value)}
                                value={photoTitle}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter photo url" 
                                onChange={e => setphotoURL(e.target.value)}
                                value={photoURL}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={submitHandler}  variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Addscreen;