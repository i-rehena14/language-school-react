import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const slicedServices = services.slice(0, 4);
    return (
        <div>

            <Carousel className="m-4" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://image.freepik.com/free-vector/two-women-sit-desk-talk_141192-974.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>To have another
                            language is to possess
                            a second soul.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://image.freepik.com/free-vector/students-are-studying-english-girl-shows-her-classmate-how-pronounce-th-sound_141192-1211.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Every student matters,
                            every moment counts.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://image.freepik.com/free-vector/teacher-whiteboard-explains-grammar-pupils_141192-1214.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Teaching Turning
                            Today’s Learners Into
                            Tomorrow’s Leaders</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h3 className="m-4">Our Services</h3>
            {
                <Row xs={1} md={4} className="g-4 m-2">
                    {
                        slicedServices.map(service => <Col>
                            <Card className="h-100 shadow">
                                <Card.Img className="h-100" variant="top" src={service.img} />
                                <Card.Body
                                >
                                    <Card.Title className="fw-bold mb-4">{service.title}</Card.Title>
                                    <h3 className="fw-bold border border-secondary rounded-pill text-success">${service.price}</h3>
                                    <p className="text-success">Instructor: {service.instructor}</p>
                                    <div className="d-flex">
                                        <h5 className="ms-2 me-4">{service.lessonNumber} <span className="text-secondary">Lessons</span></h5>
                                        <h5 className="ms-4">{service.studentNumber} <span className="text-secondary">Students</span></h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)}
                </Row>
            }


        </div>
    );
};

export default Home;