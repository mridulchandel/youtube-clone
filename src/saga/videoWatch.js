import { call, put, takeLatest } from "redux-saga/effects";

import YOUTUBEDATA from "../dummyData/videoLIst.json";
import {
  GET_WATCH_VIDEO_DETAIL,
  LOADING_WATCH_VIDEO_DETAIL,
  WATCH_VIDEO_DETAIL_FAIL,
  WATCH_VIDEO_DETAIL_SUCCESS,
} from "../action/constants";
import { getData } from "../webServices";
import { getWatchApi } from "../utility/api";

function* fetchWatchVideoDetail(action) {
  try {
    yield put({ type: LOADING_WATCH_VIDEO_DETAIL });
    const getApi = getWatchApi(action.videoId);
    const data = yield call(getData, getApi);
    // const data = YOUTUBEDATA;
    // data.success = true;
    console.log(data);
    let fetchData = {};
    if (data.success) {
      data.items.map((item) => {
        const {
          title,
          description,
          channelTitle,
          publishedAt,
          channelId,
          tags,
        } = item.snippet;
        fetchData = {
          videoId: item.id,
          description,
          title,
          channelTitle,
          channelId,
          publishedAt,
          tags: tags.slice(0, 2),
          views: "30k",
        };
      });
      yield put({ type: WATCH_VIDEO_DETAIL_SUCCESS, data: fetchData });
    } else {
      yield put({ type: WATCH_VIDEO_DETAIL_FAIL, errorMsg: data.errorMessage });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: WATCH_VIDEO_DETAIL_FAIL, errorMsg: error.errorMessage });
  }
}

export function* watchVideoFetch() {
  yield takeLatest(GET_WATCH_VIDEO_DETAIL, fetchWatchVideoDetail);
}
