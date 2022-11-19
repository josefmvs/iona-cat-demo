export interface ICatContextType extends IBreedContextType {
    cats: ICatType[]
    setCats: () => void
    breeds: IBreedType[]
    setBreeds: () => void
    selectBreed: (param: ICatBrowserState) => void
    selectedBreed?: IBreedType
}

interface ICatBrowserState {
    page: number
    limit: number
    breed: string
    loadMore: boolean
}

// export interface IBreedContextType {
//     breeds: IBreedType[]
//     setBreeds: () => void
//     selectBreed: () => void
// }

export interface ICatType {
    id: string
    name: string
    description: string
} 

export interface IBreedType {
    id: string
    name: string
    description: string
} 

export interface ICatsCollection {
    cats: ICatType[]
};

export interface IBreedsCollection {
    breeds: IBreedType[],
    selectedBreed?: IBreedType
};
// for deletion
export interface ICountContextType {
    count: number
    addCount: (value: number) => void
    decreaseCount: (value: number) => void
}