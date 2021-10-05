import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = (props) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // ---fakedata load----- 
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* ---------All services--------- */}
            <h2 className="m-4">All Services</h2>
            {
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <Col>
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

export default Services;