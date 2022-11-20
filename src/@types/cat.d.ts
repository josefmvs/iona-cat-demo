export interface ICatContextType extends IBreedContextType {
    // cats: IBreedType[]
    // setCats: () => void
    breeds: IBreedType[]
    setBreeds: () => void
    selectBreedCats: (param: ICatBrowserState) => void
    breedCats: ICatType[]
    selectedBreed?: IBreedType
    loadMoreBreedCats: (param: ICatBrowserState) => void
}

interface ICatBrowserState {
    page: number
    limit: number
    breed?: IBreedType
    loadMore: boolean
}

// export interface IBreedContextType {
//     breeds: IBreedType[]
//     setBreeds: () => void
//     selectBreed: () => void
// }

export interface ICatType {
    id: string
    url: string
} 

export interface IBreedType {
    id: string
    name: string
    description: string
    temperament: string
    origin: string
} 

export interface ICatsCollection {
    cats: ICatType[]
}

export interface IBreedsCollection {
    breeds: IBreedType[],
    breedCats: ICatType[],
    selectedBreed?: IBreedType
};
// for deletion
export interface ICountContextType {
    count: number
    addCount: (value: number) => void
    decreaseCount: (value: number) => void
}