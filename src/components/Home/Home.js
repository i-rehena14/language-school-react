import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        // ---------fakedata load-------
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        // -------fakedata loading for instructor---------
        fetch('./instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);

    const slicedServices = services.slice(0, 4);
    return (
        <div>
            {/* -------------Slider section-------- */}
            <Carousel className=" carousel" variant="dark">
                <Carousel.Item>
                    <img
                        className=" carousel-img"
                        src="https://image.freepik.com/free-vector/two-women-sit-desk-talk_141192-974.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 className="caption fw-bold">To have another
                            language is to possess
                            a second soul.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" carousel-img"
                        src="https://image.freepik.com/free-vector/students-are-studying-english-girl-shows-her-classmate-how-pronounce-th-sound_141192-1211.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caption2 fw-bold">Every student matters,
                            every moment counts.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" carousel-img"
                        src="https://image.freepik.com/free-vector/teacher-whiteboard-explains-grammar-pupils_141192-1214.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caption3 text-success fw-bold">Teaching Turning
                            Today’s Learners Into
                            Tomorrow’s Leaders</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* ----------services----------- */}
            <h3 className="m-4 pt-4 fw-bold ">Our <span className="text-success">Services</span></h3>
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
            <h4 className=" mt-4 pt-4 fw-bold">Why <span className="text-success">Choose</span> Us</h4>
            <div className="d-lg-flex m-4 p-4 text-success fw-bold fs-3 ">
                <h2 className="border border-4 rounded p-4 m-2">Online Tutoring</h2>
                <h2 className="border border-4 rounded p-4 m-2">Lifetime Access</h2>
                <h2 className="border border-4 rounded p-4 m-2">Activate Learning</h2>
                <h2 className="border border-4 rounded p-4 m-2">10+ Courses</h2>
            </div>
            {/* -----Our Instructor section-------- */}
            <h3 className="mt-4 fw-bold">Our <span className="text-success">Instructors</span></h3>
            <h5 className="fw-normal">Meet the team</h5>
            {
                <Row xs={1} md={4} className="g-4 m-2">
                    {
                        instructors.map(instructor => <Col>
                            <Card className="h-100 shadow text-center">
                                <Card.Img className="h-75 rounded" variant="top" src={instructor.img} />
                                <Card.Body
                                >
                                    <Card.Title className="fw-bold mb-4">{instructor.name}</Card.Title>
                                    <p className="text-success"> {instructor.language}</p>

                                </Card.Body>
                            </Card>
                        </Col>)}
                </Row>
            }


        </div>
    );
};

export default Home;