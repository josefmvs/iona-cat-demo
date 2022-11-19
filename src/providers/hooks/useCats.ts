import { useReducer } from 'react';
// reducer
// import catsReducer, { CatsActionKind } from '../reducers/catsReducer';
// import countReducer, { CountActionKind } from '../reducers/countReducer';
import { ICatBrowserState, ICatContextType } from '../../@types/cat';
import { getCatBreeds, getCatsByBreed } from '../../api/catApi';
import breedsReducer, { BreedsActionKind } from '../reducers/breedsReducer';

function useCats (): ICatContextType {
    // const [{ cats }, catDispatch] = useReducer(catsReducer, {
    //     cats: []
    // });

    const [{ breeds, breedCats, selectedBreed }, breedDispatch] = useReducer(breedsReducer, {
        breeds: [],
        breedCats: []
    });

    // const setCats = async (): Promise<void> => { 
    //     const breeds = await getCatBreeds();
    //     catDispatch({ type: CatsActionKind.GET_CATS, payload: breeds });
    // }

    const setBreeds = async (): Promise<void> => { 
        const breeds = await getCatBreeds();
        breedDispatch({ type: BreedsActionKind.GET_BREEDS, payload: breeds });
    }

    const selectBreedCats = async (param: ICatBrowserState): Promise<void> => { 
        const breedCats = await getCatsByBreed(param);
        breedDispatch({ type: BreedsActionKind.SELECT_BREED, payload: breedCats });
    }

    return { breeds, setBreeds, selectBreedCats, selectedBreed, breedCats };
}

export default useCats;
