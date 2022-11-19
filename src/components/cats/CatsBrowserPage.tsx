import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
// import { CatList } from "./CatList";
import { CatContext } from '../../providers/catsprovider';
import { ICatBrowserState, ICatContextType } from "../../@types/cat";
// import { CatList } from "./CatList";

export const CatsBrowserPage: React.FunctionComponent = () => {
  const { breeds, setBreeds, selectBreed } = useContext(CatContext) as ICatContextType;
  // const [loading, setLoading] = useState<boolean>(true);
  const [catBrowserState] = useState<ICatBrowserState>({
    page: 1,
    limit: 10,
    breed: "",
    loadMore: false
  });

  useEffect(() => {
    setBreeds();
  }, []);

  const selectCatBreed = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    console.log(event.currentTarget.value);
    const params = { breed: event.currentTarget.value, page: catBrowserState.page, limit: catBrowserState.limit, loadMore: catBrowserState.loadMore }
    selectBreed(params);
  }

  return (
    <Container>
        <h2>Cat Browser</h2>
        <Row className="searchBreed">
          <Col lg="3">
            <Form>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" custom onChange={selectCatBreed}>
                <option value="-1">Select Breed</option>
                {breeds.map(breed => {
                  return (
                    <option value={breed.id} key={breed.name}>{breed.name}</option>
                  );
                })}
              </Form.Control>
            </Form>         
          </Col>
        </Row> 
        {/* <CatList cats={cats}></CatList> */}
        {/* <Button variant="primary" onClick={() => setBreeds()}>Get Cats</Button> */}
    </Container>
  );
}