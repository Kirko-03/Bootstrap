import React from "react";
import {Slider} from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";


export const Home = () => {
    return<>
       <Slider/>
        <Container style={{paddingTop:'2rem'}}>
            <Row>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant={'top'} src={'https://ocean.ru/images/news/2020/ioi-conf-1.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Programm
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, velit?
                            </Card.Text>
                            <Button variant='primary'>
                                Learn more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant={'top'} src={'https://ocean.ru/images/news/2020/ioi-conf-1.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Programm
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, velit?
                            </Card.Text>
                            <Button variant='primary'>
                                Learn more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant={'top'} src={'https://ocean.ru/images/news/2020/ioi-conf-1.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Programm
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, velit?
                            </Card.Text>
                            <Button variant='primary'>
                                Learn more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}