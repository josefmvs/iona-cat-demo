import { IBreedsCollection } from "../../@types/cat";

export enum BreedsActionKind {
    GET_BREEDS = 'GET_BREEDS',
    SELECT_BREED = 'SELECT_BREED',
    LOAD_MORE = 'LOAD_MORE'
}

export interface ICatsAction {
    type: BreedsActionKind
    payload: any
}
  
const breedsReducer = (state: IBreedsCollection, action: ICatsAction): IBreedsCollection => {
    const { type, payload } = action;
    switch (type) {
        case BreedsActionKind.GET_BREEDS:
            return { ...state, breeds: payload };
        case BreedsActionKind.SELECT_BREED:
            return { ...state, breedCats: payload.breedCats, selectedBreed: payload.breed };
        case BreedsActionKind.LOAD_MORE:
            return { ...state, breedCats: payload.breedCats };
        default:
            return state;
    }
};

export default breedsReducer;
