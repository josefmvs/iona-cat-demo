import { IBreedsCollection } from "../../@types/cat";

export enum BreedsActionKind {
    GET_BREEDS = 'GET_BREEDS',
    SELECT_BREED = 'SELECT_BREED',
    LOAD_MORE = 'LOAD_MORE',
    SHOW_ERROR = 'SHOW_ERROR'
}

export interface IBreedsAction {
    type: BreedsActionKind
    payload: any
}
  
const breedsReducer = (state: IBreedsCollection, action: IBreedsAction): IBreedsCollection => {
    const { type, payload } = action;
    switch (type) {
        case BreedsActionKind.GET_BREEDS:
            return { ...state, showError: false, breeds: payload };
        case BreedsActionKind.SELECT_BREED:
            return { ...state, showError: false, showLoadMore: true, breedCats: payload.breedCats, selectedBreed: payload.breed };
        case BreedsActionKind.LOAD_MORE: 
            return setUniqueBreedCats(state, payload);
        case BreedsActionKind.SHOW_ERROR:
                return { ...state, showError: true };
        default:
            return state;
    }
};

const setUniqueBreedCats = (state: IBreedsCollection, payload: any): IBreedsCollection => {
    const newState = [...state.breedCats, ...payload.breedCats];
    const uniqueIds: string[] = [];
    const unique = newState.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
      
        if (!isDuplicate) {
            uniqueIds.push(element.id);
      
          return true;
        }
      
        return false;
      });

    return { ...state, showError: false, breedCats: unique, showLoadMore: payload.breedCats === 10 }
}

export default breedsReducer;
