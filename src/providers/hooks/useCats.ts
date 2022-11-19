import { useReducer } from 'react';
// reducer
import catsReducer, { CatsActionKind } from '../reducers/catsReducer';
// import countReducer, { CountActionKind } from '../reducers/countReducer';
import { ICatBrowserState, ICatContextType } from '../../@types/cat';
import { getCatBreeds } from '../../api/catApi';
import breedsReducer, { BreedsActionKind } from '../reducers/breedsReducer';

function useCats (): ICatContextType {
    const [{ cats }, catDispatch] = useReducer(catsReducer, {
        cats: []
    });

    const [{ breeds, selectedBreed }, breedDispatch] = useReducer(breedsReducer, {
        breeds: []
    });

    const setCats = async (): Promise<void> => { 
        const breeds = await getCatBreeds();
        catDispatch({ type: CatsActionKind.GET_CATS, payload: breeds });
    }

    const setBreeds = async (): Promise<void> => { 
        const breeds = await getCatBreeds();
        breedDispatch({ type: BreedsActionKind.GET_BREEDS, payload: breeds });
    }

    const selectBreed = async (param: ICatBrowserState): Promise<void> => { 
        const breed = breeds[0];
        breedDispatch({ type: BreedsActionKind.SELECT_BREED, payload: breed });
    }

    return { cats, setCats, breeds, setBreeds, selectBreed, selectedBreed };
}

export default useCats;
