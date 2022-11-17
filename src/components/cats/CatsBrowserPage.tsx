import React from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CatList } from "./CatList";

export const CatsBrowserPage: React.FunctionComponent = () => {
  return (
    <Container>
        <h2>Cat Browser</h2>
        <Row className="searchBreed">
          <Col lg="3">
            <Form>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" custom>
              </Form.Control>
            </Form>         
          </Col>
        </Row> 
        <CatList></CatList>
        <Button variant="primary">Load More</Button>
    </Container>
  );
}