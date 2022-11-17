export enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
}

export interface CountAction {
    type: CountActionKind
    payload: number
}
  
  // An interface for our state
export interface CountState {
    count: number
}

const catsReducer = (state: CountState, action: CountAction): CountState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default catsReducer;
