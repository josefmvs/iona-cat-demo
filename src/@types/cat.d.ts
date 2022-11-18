export interface ICatContextType {
    cats: ICatType[]
    // addCount: (value: number) => void
    setCats: () => void
    // addCount: (value: number) => void
    // decreaseCount: (value: number) => void
}

export interface ICountContextType {
    count: number
    addCount: (value: number) => void
    decreaseCount: (value: number) => void
}

export interface ICatType {
    id: string
    name: string
    description: string
    testdesc: string
} 

export interface IGetUsersResponse {
    data: ICatType[]
};

// export interface ICatType {
//     count: number
//     addCount: (value: number) => void
//     decreaseCount: (value: number) => void
// }