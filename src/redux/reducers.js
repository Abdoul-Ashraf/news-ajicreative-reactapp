import {
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED,
  } from "../constants/actionTypes";
import { REHYDRATE } from "redux-persist";

const INIT_STATE = {
    articles: [],
    error: {},
  };

  const AjiNews = (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case GET_ARTICLES_SUCCESS:
        return { ...state, articles: action.payload };
  
      case GET_ARTICLES_FAILED:
        return { ...state, error: action.payload.error};

      default:
        return { ...state };
    }
  };
  
  export default AjiNews;