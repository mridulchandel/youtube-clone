import { call, put, takeLatest } from "redux-saga/effects";

import YOUTUBEDATA from "../dummyData/videoLIst.json";
import {
  GET_HOME_VIDEOS,
  GET_SEARCH_VIDEOS,
  LOADING_VIDEOS,
  VIDEO_FETCH_SUCCESS,
  VIDEO_FETCH_FAIL,
} from "../action/constants";
import { getData } from "../webServices";
import { config } from "../config/youtubeConfig";

function* fetchHomeVideos(action) {
  try {
    yield put({ type: LOADING_VIDEOS });
    // const data = yield call(
    //   getData,
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=${config.api_key}`
    // );
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
      yield put({ type: VIDEO_FETCH_SUCCESS, data: fetchData });
    } else {
      yield put({ type: VIDEO_FETCH_FAIL, errorMsg: data.errorMessage });
    }
  } catch (error) {
    yield put({ type: VIDEO_FETCH_FAIL, errorMsg: error.errorMessage });
  }
}

function* fetchSearchVideos(action) {
  try {
    yield put({ type: LOADING_VIDEOS });
    // const data = yield call(
    //   getData,
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${action.searchValue}&type=video&key=${config.api_key}`
    // );
    console.log(data, "data");
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
      yield put({ type: VIDEO_FETCH_SUCCESS, data: fetchData });
    } else {
      yield put({ type: VIDEO_FETCH_FAIL, errorMsg: data.errorMessage });
    }
  } catch (error) {
    yield put({ type: VIDEO_FETCH_FAIL, errorMsg: error.errorMessage });
  }
}

export function* watchVideoFetch() {
  yield takeLatest(GET_HOME_VIDEOS, fetchHomeVideos);
  yield takeLatest(GET_SEARCH_VIDEOS, fetchSearchVideos);
}
