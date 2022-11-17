import { useReducer } from 'react';
// reducer
import catsReducer, { CountActionKind } from '../reducers/catsReducer';
import { ICatContextType } from '../../@types/cat';

function useCats (): ICatContextType {
    const [{ count }, dispatch] = useReducer(catsReducer, {
        count: 0
    });

    const addCount = async (value: number): Promise<void> => { 
        dispatch({ type: CountActionKind.INCREASE, payload: value });
    }

    function decreaseCount (value: number): void {
        dispatch({ type: CountActionKind.DECREASE, payload: value });
    }

    return { count, addCount, decreaseCount };
}

export default useCats;
