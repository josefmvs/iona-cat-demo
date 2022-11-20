import { useReducer } from 'react';
import { ICatBrowserState, ICatContextType } from '../../@types/cat';
import { getCatBreeds, getCatsByBreed } from '../../api/catApi';
import breedsReducer, { BreedsActionKind } from '../reducers/breedsReducer';

function useBreeds (): ICatContextType {
    const [{ breeds, breedCats, selectedBreed }, breedDispatch] = useReducer(breedsReducer, {
        breeds: [],
        breedCats: []
    });

    const setBreeds = async (): Promise<void> => { 
        const breeds = await getCatBreeds();
        breedDispatch({ type: BreedsActionKind.GET_BREEDS, payload: breeds });
    }

    const selectBreedCats = async (param: ICatBrowserState): Promise<void> => { 
        const breedCats = await getCatsByBreed(param);
        breedDispatch({ type: BreedsActionKind.SELECT_BREED, payload: { "breed": param.breed, "breedCats": breedCats } });
    }

    const loadMoreBreedCats = async (param: ICatBrowserState): Promise<void> => { 
        const breedCats = await getCatsByBreed(param);
        breedDispatch({ type: BreedsActionKind.LOAD_MORE, payload: { "breedCats": breedCats } });
    }

    return { breeds, setBreeds, selectBreedCats, selectedBreed, breedCats, loadMoreBreedCats };
}

export default useBreeds;
