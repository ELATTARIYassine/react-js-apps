import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';
import services from '../services/services';
import Spinner from '../components/UI/spinner/Spinner';

function Homescreen() {

    const [photos, setphotos] = useState(null);

    useEffect(() => {
        fetchPhotos();
        console.log('im ruinning everything');
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await services.getAllPhotos();
            setphotos(res.data.reverse().slice(0, 10));
        }catch (error){
            alert('Failed to fetch photos.');
        }
    }
    const deleteHandler = async (id) => {
        console.log(id);
        try {
            const res = await services.deletePhoto(id);
            const data = photos.filter(el => {
                return el.id != id;
            });
            setphotos(data);
            alert('success');
        } catch (error) {
            
        }
    }

    if(!photos)
    {
        return (
           <Spinner />
        );
    }
    
    return (
        <Container style={{padding: 10}}>
            <Row>
                {
                    photos.map(photoItem => (
                        <PhotoItem 
                            id={photoItem.id}
                            key={photoItem.id}
                            title={photoItem.title}
                            deleteItem={deleteHandler}
                            thumbnailUrl={photoItem.thumbnailUrl} />
                    ))
                }
            </Row>
        </Container>
    );
}
export default Homescreen;