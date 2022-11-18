import { ICatType } from "../../@types/cat";

export enum CatsActionKind {
    GET_CATS = 'GET_CATS'
}

export interface CatsAction {
    type: CatsActionKind
    payload: ICatType[]
}

export interface CatsState {
    cats: ICatType[]
}
  
const catsReducer = (state: CatsState, action: CatsAction): CatsState => {
    const { type, payload } = action;
    switch (type) {
        case CatsActionKind.GET_CATS:
        return {
            cats: payload,
        };
        default:
            return state;
    }
};

export default catsReducer;
