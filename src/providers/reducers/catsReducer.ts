import { ICatsCollection, ICatType } from "../../@types/cat";

export enum CatsActionKind {
    GET_CATS = 'GET_CATS'
}

export interface CatsAction {
    type: CatsActionKind
    payload: ICatType[]
}

const catsReducer = (state: ICatsCollection, action: CatsAction): ICatsCollection => {
    const { type, payload } = action;
    switch (type) {
        // case CatsActionKind.GET_CATS:
        // return {
        //     cats: payload,
        // };
        default:
            return state;
    }
};

export default catsReducer;
