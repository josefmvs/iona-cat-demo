import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ICatContextType } from "../../@types/cat";
import { CatContext } from "../../providers/catsprovider";

export const CatDetail: React.FunctionComponent = (props) => {
  const { selectedBreed, breedCats } = useContext(CatContext) as ICatContextType;
  const { id } = useParams();
  const cat = breedCats.find(a => a.id === id);

  return (
    <Container>
      <div className="CatDetail">
        <Card>
          <Card.Header>
            <Link to={{
            pathname: '/',
            search: '?breed=' + (selectedBreed !== undefined ? selectedBreed?.id.toString() : '')
          }}> <Button variant="primary">Back</Button> </Link>
          </Card.Header>
          <Card.Img variant="top" src={cat?.url} />
          <Card.Body>
            <h4>{selectedBreed?.name}</h4>
            <h5>Origin: {selectedBreed?.origin}</h5>
            <h6>{selectedBreed?.temperament}</h6>
            <p>{selectedBreed?.description}</p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
