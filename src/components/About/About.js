import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        // -------fakedata loading for instructor---------
        fetch('./instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    return (
        <div className="h-100">
            <div className="">
                <h3 className="fw-bold mt-4">About Us</h3>
            </div>
            <hr className="m-4" />
            <h2 className="">Know About Best Online Language Learning <br />Platform With Verbalize</h2>
            <p>We teach our students with care.The teacher here are well trained.</p>
            <h4 className="text-success mt-4 pt-4">Why Choose Us</h4>
            <div className="d-lg-flex m-4 p-4 text-success fw-bold fs-3 ">
                <h2 className="border border-4 rounded p-4 m-2">Online Tutoring</h2>
                <h2 className="border border-4 rounded p-4 m-2">Lifetime Access</h2>
                <h2 className="border border-4 rounded p-4 m-2">Activate Learning</h2>
                <h2 className="border border-4 rounded p-4 m-2">10+ Courses</h2>
            </div>
            {/* -----Our Instructor section-------- */}
            <h3 className="mt-4">Our Instructors</h3>
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

export default About;