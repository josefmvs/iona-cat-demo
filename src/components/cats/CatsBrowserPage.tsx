import React, { useContext } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
// import { CatList } from "./CatList";
import { CatContext } from '../../providers/catsprovider';
import { ICatContextType } from "../../@types/cat";

export const CatsBrowserPage: React.FunctionComponent = () => {
  const { cats, setCats } = useContext(CatContext) as ICatContextType;

  return (
    <Container>
        <h2>Cat Browser Count: {cats.length}</h2>
        <Row className="searchBreed">
          <Col lg="3">
            <Form>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" custom>
              </Form.Control>
            </Form>         
          </Col>
        </Row> 
        <ul>
          {cats.map((cat) =>
            <li key={cat.id}>
              {cat.name} {cat.description}
            </li>
          )}
        </ul>
        
        <Button variant="primary" onClick={() => setCats()}>Decrease</Button>
    </Container>
  );
}