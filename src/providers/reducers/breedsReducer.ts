import { IBreedsCollection, ICatType } from "../../@types/cat";

export enum BreedsActionKind {
    GET_BREEDS = 'GET_BREEDS',
    SELECT_BREED = 'SELECT_BREED',
    LOAD_MORE = 'LOAD_MORE'
}

export interface IBreedsAction {
    type: BreedsActionKind
    payload: any
}
  
const breedsReducer = (state: IBreedsCollection, action: IBreedsAction): IBreedsCollection => {
    const { type, payload } = action;
    switch (type) {
        case BreedsActionKind.GET_BREEDS:
            return { ...state, breeds: payload };
        case BreedsActionKind.SELECT_BREED:
            return { ...state, breedCats: payload.breedCats, selectedBreed: payload.breed };
        case BreedsActionKind.LOAD_MORE: 
            return setUniqueBreedCats(state, payload);
        default:
            return state;
    }
};

const setUniqueBreedCats = (state: IBreedsCollection, payload: any): IBreedsCollection => {
    const newState = [...state.breedCats, ...payload.breedCats] as ICatType[]
    const uniqueIds: string[] = [];
    const unique = newState.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
      
        if (!isDuplicate) {
            uniqueIds.push(element.id);
      
          return true;
        }
      
        return false;
      });

    return { ...state, breedCats: unique }
}

export default breedsReducer;
