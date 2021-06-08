import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED,
  } from "../constants/actionTypes";

import {
    getArticlesService,
} from "./service";

import {
    getArticlesSuccess,
    getArticlesFailed
} from "./actions";
import store from "../store";


function* getArticlesSaga() {
  try {
    const response = yield call(getArticlesService);
    yield put(getArticlesSuccess(response));
  } catch (error) {
    //console.log("error ................", error);
    let message="error...";
    
    yield put(getArticlesFailed(message));
  }
}



export function* watchGetArticlesSaga() {
  yield takeEvery(GET_ARTICLES_SUCCESS, getArticlesSaga);
}


function* AjiSaga() {
  yield all([
    fork(watchGetArticlesSaga)
  ]);
}

export default AjiSaga;
