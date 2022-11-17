
import axios from 'axios'; 

const breedsUrl = "https://api.thecatapi.com/v1/breeds/";
// const searchImagesUrl = "https://api.thecatapi.com/v1/images/search";

export async function getCatBreeds (): Promise<any> {
    const _url = breedsUrl;

    return await axios({
    method: 'get',
    url: _url
    }).then(
        function (response) {
            return response;
        }
    );
}