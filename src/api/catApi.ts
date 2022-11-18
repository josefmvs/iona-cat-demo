
import axios from 'axios'; 
import { ICatType } from '../@types/cat';

const breedsUrl = "https://api.thecatapi.com/v1/breeds/";
// const searchImagesUrl = "https://api.thecatapi.com/v1/images/search";

export async function getCatBreeds (): Promise<ICatType[]> {
    const _url = breedsUrl;

    const { data } = await axios.get(
        _url,
        {
            headers: {
            Accept: 'application/json',
            },
        },
    );

    return data;
}