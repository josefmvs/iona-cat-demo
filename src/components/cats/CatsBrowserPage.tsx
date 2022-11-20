import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { CatContext } from '../../providers/catsprovider';
import { ICatBrowserState, ICatContextType, IBreedType } from "../../@types/cat";
import { CatList } from "./CatList";
import { useSearchParams } from "react-router-dom";

export const CatsBrowserPage: React.FunctionComponent = () => {
  const { breeds, setBreeds, selectBreedCats, breedCats, loadMoreBreedCats, showLoadMore, showError } = useContext(CatContext) as ICatContextType;
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [catBrowserState, setCatBrowserState] = useState<ICatBrowserState>({
    page: 1,
    limit: 10,
    breed: undefined,
    loadMore: false
  });

  useEffect(() => {
    setBreeds();
    if (searchParams.get('breed') !== null) {
      handleBackButton(searchParams.get('breed') ?? '');
    }
  }, []);

  useEffect(() => {
    if (breedCats.length > 0) {
      setCount(breedCats.length);
    }
    setLoading(false);
  }, [breedCats]);

  const handleSelectCatBreed = (event: React.ChangeEvent<HTMLInputElement>): void => {
    selectCatBreed(event.currentTarget.value);
  }

  const handleBackButton = (id: string): void => {
    selectCatBreed(id);
  };

  const selectCatBreed = (id: string): void => {
    const selectedBreed = breeds.find(a => a.id === id) as IBreedType;
    const params = { breed: selectedBreed, page: 1, limit: catBrowserState.limit, loadMore: catBrowserState.loadMore }
    setLoading(true);
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
        {
          (showError && 
            <Alert variant='danger'>
               Apologies but we could not load new cats for you at this time! Miau!
            </Alert>
          )
        }
        <h1>Cat Browser</h1>
        <Row className="searchBreed">
          <Col lg="3">
            <Form>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" value={catBrowserState.breed?.id} custom onChange={handleSelectCatBreed}>
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
          showLoadMore && <Button className="btn btn-success" disabled={loading} onClick={() => loadMore()}>{loading ? 'Loading...' : 'Load more' }</Button>
        }
    </Container>
  );
}