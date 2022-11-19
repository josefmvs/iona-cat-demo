import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ICatsCollection } from "../../@types/cat";

export const CatList: React.FunctionComponent<ICatsCollection> = ({ cats }: ICatsCollection) => {
  return (
    <Container className="CatList">
      <div>
        <div className="row">
          {cats.map((cat) => {
            return (
              <Col style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }} key={cat.id} className="col-md-3 col-sm-6 col-12">
                <Card>
                  <Card.Img variant="top" src={cat.url} />
                  <Card.Body>
                    <Link to={"/cat/" + cat.id}><Button variant="primary" block>View details</Button></Link>
                  </Card.Body>
                </Card>
              </Col>)
            })
          }
        </div>
      </div>
    </Container>
  );
}