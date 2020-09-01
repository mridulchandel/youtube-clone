import { call, put, takeLatest } from "redux-saga/effects";

import YOUTUBEDATA from "../dummyData/videoLIst.json";
import {
  GET_HOME_VIDEOS,
  LOADING_VIDEOS,
  VIDEO_FETCH_SUCCESS,
  VIDEO_FETCH_FAIL,
  GET_SEARCH_VIDEOS,
  LOADING_SEARCH_VIDEOS,
  VIDEO_SEARCH_SUCCESS,
  VIDEO_SEARCH_FAIL,
  GET_WATCH_SEARCH_VIDEOS,
  LOADING_WATCH_SEARCH_VIDEOS,
  VIDEO_WATCH_SEARCH_SUCCESS,
  VIDEO_WATCH_SEARCH_FAIL,
} from "../action/constants";
import { getData } from "../webServices";
import { getSearchApi } from "../utility/api";

function* search(action, LOADING, VIDEO_SUCCESS, VIDEO_FAIL) {
  try {
    yield put({ type: LOADING });
    const getApi = action.searchValue
      ? getSearchApi(action.searchValue)
      : getSearchApi();
    // const data = yield call(getData, getApi);
    const data = YOUTUBEDATA;
    data.success = true;
    if (data.success) {
      const fetchData = data.items.map((item) => {
        const {
          title,
          channelTitle,
          publishedAt,
          thumbnails,
          channelId,
        } = item.snippet;
        return {
          videoId: item.id.videoId,
          title,
          channelTitle,
          thumbnails,
          channelId,
          publishedAt,
          views: "30k",
        };
      });
      yield put({ type: VIDEO_SUCCESS, data: fetchData });
    } else {
      yield put({ type: VIDEO_FAIL, errorMsg: data.errorMessage });
    }
  } catch (error) {
    yield put({ type: VIDEO_FAIL, errorMsg: error.errorMessage });
  }
}

function* fetchHomeVideos(action) {
  yield call(
    search,
    action,
    LOADING_VIDEOS,
    VIDEO_FETCH_SUCCESS,
    VIDEO_FETCH_FAIL
  );
}

function* fetchSearchVideos(action) {
  yield call(
    search,
    action,
    LOADING_SEARCH_VIDEOS,
    VIDEO_SEARCH_SUCCESS,
    VIDEO_SEARCH_FAIL
  );
}

function* fetchWatchSearchVideos(action) {
  yield call(
    search,
    action,
    LOADING_WATCH_SEARCH_VIDEOS,
    VIDEO_WATCH_SEARCH_SUCCESS,
    VIDEO_WATCH_SEARCH_FAIL
  );
}

export function* searchVideoFetch() {
  yield takeLatest(GET_HOME_VIDEOS, fetchHomeVideos);
  yield takeLatest(GET_SEARCH_VIDEOS, fetchSearchVideos);
  yield takeLatest(GET_WATCH_SEARCH_VIDEOS, fetchWatchSearchVideos);
}
