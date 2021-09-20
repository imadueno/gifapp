const apiKey = '04rl8m92qrzHbIV5M5EKwVjqmIj3jkw8';

async function getGifs({keyword = 'cats'} = {}){

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    const apiResponse = await fetch(apiURL);
    const response = await apiResponse.json();
    const {data} = response;

    const gifs = data.map(gif => {
        const {images, title, id} = gif;
        const {url} = images.downsized_medium;
        return { id, title, url};
    });
    
    return gifs;
}

export default getGifs;