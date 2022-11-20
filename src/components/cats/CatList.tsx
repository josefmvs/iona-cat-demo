import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ICatsCollection } from "../../@types/cat";

export const CatList: React.FunctionComponent<ICatsCollection> = ({ cats }: ICatsCollection) => {
  return (
    <div>
      <div className="row">
        {cats.map((cat) => {
          return (
            <Col key={cat.id} className="col-md-3 col-sm-6 col-12">
              <Card className="mb-3">
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
  );
}