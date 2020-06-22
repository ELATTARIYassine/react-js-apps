import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import services from '../services/services';
import Spinner from '../components/UI/spinner/Spinner';

const Editscreen = (props) => {
    
    const [photoID, setphotoID] = useState(null);
    const [photoTitle, setphotoTitle] = useState(null);
    const [photoURL, setphotoURL] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if(!photoTitle || !photoURL)
            {
                alert('title & url are required!');
                return;
            }
            const photo = {id: photoID, photoTitle, photoURL};
            console.log(photo);
            await services.updatePhoto(photo);
            alert('photo updated successfuly');
            props.history.push('/');
        } catch (error) {
            alert('photo update failed');
            console.log(error);
        }
    }
    const loadPhoto = async (id) => {
        try {
            const loadedPhoto = await services.editPhoto(id);
            setphotoTitle(loadedPhoto.data.title);
            setphotoURL(loadedPhoto.data.thumbnailUrl);
            setphotoID(loadedPhoto.data.id);
        } catch (error) {
            alert('cant load the image');
        }
    }
    useEffect(() => {
        loadPhoto(props.match.params.id);
    }, []);

    if(photoTitle == null || photoURL == null)
    {
        return (
            <Spinner />
        );
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
export default Editscreen;