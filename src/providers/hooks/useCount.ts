import { useReducer } from 'react';
// reducer
import countReducer, { CountActionKind } from '../reducers/countReducer';
import { ICountContextType } from '../../@types/cat';

function useCount (): ICountContextType {
    const [{ count }, dispatch] = useReducer(countReducer, {
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

export default useCount;
