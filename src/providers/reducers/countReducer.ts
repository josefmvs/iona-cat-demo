export enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
}

export interface CountAction {
    type: CountActionKind
    payload: number
}
  
export interface CountState {
    count: number
}

const countReducer = (state: CountState, action: CountAction): CountState => {
    const { type, payload } = action;
    switch (type) {
        case CountActionKind.INCREASE:
        return {
            count: state.count + payload,
        };
        case CountActionKind.DECREASE:
        return {
            count: state.count - payload,
        };
        default:
            return state;
    }
};

export default countReducer;
