import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="">
            <div className=" d-flex justify-content m-4">
                <div className="w-50 m-4 p-2 border">
                    {/* --------FAQ section----------- */}
                    <h1 className="m-4">FAQ</h1>
                    <h2 className="text-success fw-light">General Questions</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Is any Spoken English at this courses?</Accordion.Header>
                            <Accordion.Body>
                                Yes.There are various kind of courses thet you would like.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Is there any Japanese Language?</Accordion.Header>
                            <Accordion.Body>
                                There are many kinds of courses in japanese language.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Is there any Spanish Language for Beginner?</Accordion.Header>
                            <Accordion.Body>
                                Yes.There is a course in Spanish language for beginner.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {/* -------Get in Touch section---------*/}
                <div className="w-50 m-4 p-2 border">
                    <h2>Get In Touch With Us</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Messasge</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className="border border-2 " type="submit">Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FAQ;