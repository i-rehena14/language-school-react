import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <h1 className="m-4">FAQ</h1>
            <div className="m-4">
                <h2>General Questions</h2>
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
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;