import {
  GET_WATCH_VIDEO_DETAIL,
  LOADING_WATCH_VIDEO_DETAIL,
  WATCH_VIDEO_DETAIL_SUCCESS,
  WATCH_VIDEO_DETAIL_FAIL,
} from "./constants";

export function getWatchVideoDetails(videoId) {
  return {
    type: GET_WATCH_VIDEO_DETAIL,
    videoId,
  };
}
