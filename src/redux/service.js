import { httpClient_get } from "../helpers/api";

const getArticlesService = () => {
  return httpClient_get()
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};


export { getArticlesService };
