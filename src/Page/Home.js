import React from 'react'
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import './Home.css'

export const Home = () => {
    return (
        <div>
            <Container fluid className='main-container'>
                <Container>
                    <Card body>
                        <strong>
                            Todo App
                        </strong>

                        <div className='add-container'>
                            <Row>
                                <Col md={11}>
                                    <Form.Control type="text" placeholder="Add Your New Activity" />
                                </Col>

                                <Col md={1}>
                                    <button className='btn-add'>Add List</button>
                                </Col>
                            </Row> 
                        </div>
                    </Card> 
                </Container>

            </Container>

        </div>
    )
}
