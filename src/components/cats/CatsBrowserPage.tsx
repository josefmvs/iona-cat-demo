import React, { useContext } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CatList } from "./CatList";
import { CatContext } from '../../providers/catsprovider';
import { ICatContextType } from "../../@types/cat";

export const CatsBrowserPage: React.FunctionComponent = () => {
  const { count, addCount, decreaseCount } = useContext(CatContext) as ICatContextType;

  return (
    <Container>
        <h2>Cat Browser Count: {count}</h2>
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
        <Button variant="primary" onClick={() => addCount(2)}>Add</Button>
        <Button variant="primary" onClick={() => decreaseCount(2)}>Decrease</Button>
    </Container>
  );
}