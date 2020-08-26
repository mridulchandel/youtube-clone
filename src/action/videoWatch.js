import { GET_WATCH_VIDEO_DETAIL } from "./constants";

export function getWatchVideoDetails(videoId) {
  return {
    type: GET_WATCH_VIDEO_DETAIL,
    videoId,
  };
}
