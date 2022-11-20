import { useReducer } from 'react';
import { ICatBrowserState, ICatContextType } from '../../@types/cat';
import { getCatBreeds, getCatsByBreed } from '../../api/catApi';
import breedsReducer, { BreedsActionKind } from '../reducers/breedsReducer';

function useBreeds (): ICatContextType {
    const [{ breeds, breedCats, selectedBreed, showLoadMore, showError }, breedDispatch] = useReducer(breedsReducer, {
        breeds: [],
        breedCats: [],
        showLoadMore: true,
        showError: false
    });

    const setBreeds = async (): Promise<void> => { 
        try {
            const breeds = await getCatBreeds();
            breedDispatch({ type: BreedsActionKind.GET_BREEDS, payload: breeds });
        } catch (error) {
            breedDispatch({ type: BreedsActionKind.SHOW_ERROR, payload: {} });
        }
    }

    const selectBreedCats = async (param: ICatBrowserState): Promise<void> => { 
        try {
            const breedCats = await getCatsByBreed(param);
            breedDispatch({ type: BreedsActionKind.SELECT_BREED, payload: { "breed": param.breed, "breedCats": breedCats } });
        } catch (error) {
            breedDispatch({ type: BreedsActionKind.SHOW_ERROR, payload: {} });
        }
    }

    const loadMoreBreedCats = async (param: ICatBrowserState): Promise<void> => { 
        try {
            const breedCats = await getCatsByBreed(param);
            breedDispatch({ type: BreedsActionKind.LOAD_MORE, payload: { "breedCats": breedCats } });
        } catch (error) {
            breedDispatch({ type: BreedsActionKind.SHOW_ERROR, payload: {} });
        }
    }

    return { breeds, setBreeds, selectBreedCats, selectedBreed, breedCats, loadMoreBreedCats, showLoadMore, showError };
}

export default useBreeds;
