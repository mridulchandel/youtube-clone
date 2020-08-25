import {
  LOADING_WATCH_VIDEO_DETAIL,
  WATCH_VIDEO_DETAIL_FAIL,
  WATCH_VIDEO_DETAIL_SUCCESS,
} from "../action/constants";

const initialState = {
  isLoadingWatchDetails: false,
  fetchWatchDetails: {},
  watchErrorMsg: "",
};

export function videoWatch(state = initialState, action) {
  switch (action.type) {
    case LOADING_WATCH_VIDEO_DETAIL:
      return {
        ...state,
        isLoadingWatchDetails: true,
      };
    case WATCH_VIDEO_DETAIL_SUCCESS:
      return {
        ...state,
        isLoadingWatchDetails: false,
        fetchWatchDetails: action.data,
        watchErrorMsg: "",
      };
    case WATCH_VIDEO_DETAIL_FAIL:
      return {
        ...state,
        isLoadingWatchDetails: false,
        fetchWatchDetails: {},
        watchErrorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}
