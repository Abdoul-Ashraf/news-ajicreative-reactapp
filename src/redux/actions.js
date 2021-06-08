import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
} from "../constants/actionTypes";

export const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

export const getArticlesFailed = (error) => ({
  type: GET_ARTICLES_FAILED,
  payload: { error },
});