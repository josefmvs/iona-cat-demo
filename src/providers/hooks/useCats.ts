import { useReducer } from 'react';
// reducer
import catsReducer, { CatsActionKind } from '../reducers/catsReducer';
// import countReducer, { CountActionKind } from '../reducers/countReducer';
import { ICatContextType } from '../../@types/cat';
import { getCatBreeds } from '../../api/catApi';

function useCats (): ICatContextType {
    const [{ cats }, dispatch] = useReducer(catsReducer, {
        cats: []
    });

    const setCats = async (): Promise<void> => { 
        const breeds = await getCatBreeds();
        dispatch({ type: CatsActionKind.GET_CATS, payload: breeds });
    }

    return { cats, setCats };
}

export default useCats;
