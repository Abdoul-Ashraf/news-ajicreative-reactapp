import axios from 'axios';

 const httpClient =  axios.create({});

/**
 *
 * @param {string} url
 * @param {object} data
 */
const httpClient_get = () => {
   return httpClient.get(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=b4709be0a02b4c7cbf0256c4bf9a6f00`);
}

export {
    httpClient,
    httpClient_get
}
