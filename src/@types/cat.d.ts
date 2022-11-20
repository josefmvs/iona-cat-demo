export interface ICatContextType extends IBreedContextType {
    breeds: IBreedType[]
    setBreeds: () => void
    selectBreedCats: (param: ICatBrowserState) => void
    breedCats: ICatType[]
    selectedBreed?: IBreedType
    loadMoreBreedCats: (param: ICatBrowserState) => void
    showLoadMore: boolean,
    showError: boolean
}

interface ICatBrowserState {
    page: number
    limit: number
    breed?: IBreedType
    loadMore: boolean
}

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
    showLoadMore: boolean,
    showError: boolean
};