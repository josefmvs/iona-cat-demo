
import axios from 'axios'; 
import { IBreedType, ICatBrowserState } from '../@types/cat';

const breedsUrl = "https://api.thecatapi.com/v1/breeds/";
const searchImagesUrl = "https://api.thecatapi.com/v1/images/search";

export async function getCatBreeds (): Promise<IBreedType[]> {
    const _url = breedsUrl;
    try {
        const { data } = await axios.get(
            _url,
            {
                headers: {
                Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        handleError(error);
    }

    return [];
}

export async function getCatsByBreed (payload: ICatBrowserState): Promise<IBreedType[]> {
    const _params = payload;
    const _url = searchImagesUrl + "?page=" + _params.page.toString() + "&limit=" + _params.limit.toString() + "&breed_id=" + (_params.breed !== undefined ? _params.breed?.id.toString() : '');
    
    if (_params.breed !== undefined && _params.breed?.id !== '') {
        try {
            const { data } = await axios.get(
                _url,
                {
                    headers: {
                    Accept: 'application/json',
                    },
                },
            );
    
            return data;
        } catch (error) {
            handleError(error);
        }
    }

    return [];
}

function handleError (error: any): any {
    // console.error("API call failed. " + error.message.toString());
    throw error;
}