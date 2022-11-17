import { useReducer } from 'react';
// reducer
import catsReducer, { CountActionKind } from '../reducers/catsReducer';
import { ICatContextType } from '../../@types/cat';

function useUser (): ICatContextType {
    const [{ count }, dispatch] = useReducer(catsReducer, {
        count: 0
    });

    function addCount (value: number): void { 
        dispatch({ type: CountActionKind.INCREASE, payload: value });
    }

    function decreaseCount (value: number): void {
        dispatch({ type: CountActionKind.DECREASE, payload: value });
    }

    return { count, addCount, decreaseCount };
}

export default useUser;
