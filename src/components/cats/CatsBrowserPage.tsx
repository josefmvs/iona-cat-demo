import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CatContext } from '../../providers/catsprovider';
import { ICatBrowserState, ICatContextType, IBreedType } from "../../@types/cat";
import { CatList } from "./CatList";

export const CatsBrowserPage: React.FunctionComponent = () => {
  const { breeds, setBreeds, selectBreedCats, breedCats, loadMoreBreedCats } = useContext(CatContext) as ICatContextType;
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
  const [catBrowserState, setCatBrowserState] = useState<ICatBrowserState>({
    page: 1,
    limit: 10,
    breed: undefined,
    loadMore: false
  });

  useEffect(() => {
    setBreeds();
  }, []);

  useEffect(() => {
    if (breedCats.length > 0) {
      setCount(breedCats.length);

      if (breedCats.length === count) {
        setShowLoadMore(false);
      }
    }
    setLoading(false);
  }, [breedCats]);

  const handleSelectCatBreed = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedBreed = breeds.find(a => a.id === event.currentTarget.value) as IBreedType;
    const params = { breed: selectedBreed, page: 1, limit: catBrowserState.limit, loadMore: catBrowserState.loadMore }
    setLoading(true);
    setShowLoadMore(true);
    setCount(0);
    setCatBrowserState({ ...catBrowserState, breed: selectedBreed, page: 1 })
    selectBreedCats(params);
  }

  const loadMore = (): void => {
    const newPage = catBrowserState.page + 1;
    const params = { breed: catBrowserState.breed, page: newPage, limit: catBrowserState.limit, loadMore: true }
    setCatBrowserState({ ...catBrowserState, page: newPage })
    loadMoreBreedCats(params);
  }

  return (
    <Container className="mb-4">
        <h2>Cat Browser</h2>
        <Row className="searchBreed">
          <Col lg="3">
            <Form>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" custom onChange={handleSelectCatBreed}>
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
        <div className="mt-4 mb-4">
          {
            (count === 0 && 
              <div>No cat available</div>
            )
          }
          {
            (count > 0 && 
              <CatList cats={breedCats}></CatList>
            )
          }
        </div>
        {
          ((showLoadMore && count > 0) && 
            <Button className="btn btn-success" disabled={loading} onClick={() => loadMore()}>{loading ? 'Loading...' : 'Load more' }</Button>
          )
        }
    </Container>
  );
}