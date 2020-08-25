import {
  VIDEO_FETCH_SUCCESS,
  VIDEO_FETCH_FAIL,
  LOADING_VIDEOS,
  LOADING_SEARCH_VIDEOS,
  VIDEO_SEARCH_FAIL,
  VIDEO_SEARCH_SUCCESS,
  LOADING_WATCH_SEARCH_VIDEOS,
  VIDEO_WATCH_SEARCH_FAIL,
  VIDEO_WATCH_SEARCH_SUCCESS,
} from "../action/constants";

const initialState = {
  isLoading: false,
  fetchVideos: [],
  errorMsg: "",
  isLoadingSearch: false,
  fetchSearchVideos: [],
  searchErrorMsg: "",
  isLoadingWatchSearch: false,
  fetchWatchSearchVideos: [],
  watchSearchErrorMsg: "",
};

function videoObj(state, fetchVideos, isLoading, errorMsg) {
  return {
    ...state,
    fetchVideos,
    isLoading,
    errorMsg,
  };
}

function videoSearchObj(
  state,
  fetchSearchVideos,
  isLoadingSearch,
  searchErrorMsg
) {
  return {
    ...state,
    fetchSearchVideos,
    isLoadingSearch,
    searchErrorMsg,
  };
}

function videoWatchSearchObj(
  state,
  fetchWatchSearchVideos,
  isLoadingWatchSearch,
  watchSearchErrorMsg
) {
  return {
    ...state,
    fetchWatchSearchVideos,
    isLoadingWatchSearch,
    watchSearchErrorMsg,
  };
}

export const videoSearch = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_FETCH_SUCCESS:
      return videoObj(state, action.data, false, "");
    case VIDEO_FETCH_FAIL:
      return videoObj(state, [], false, action.errorMsg);
    case LOADING_VIDEOS:
      return { ...state, isLoading: true };
    case VIDEO_SEARCH_SUCCESS:
      return videoSearchObj(state, action.data, false, "");
    case VIDEO_SEARCH_FAIL:
      return videoSearchObj(state, [], false, action.errorMsg);
    case LOADING_SEARCH_VIDEOS:
      return { ...state, isLoadingSearch: true };
    case VIDEO_WATCH_SEARCH_SUCCESS:
      return videoWatchSearchObj(state, action.data, false, "");
    case VIDEO_WATCH_SEARCH_FAIL:
      return videoWatchSearchObj(state, [], false, action.errorMsg);
    case LOADING_WATCH_SEARCH_VIDEOS:
      return { ...state, isLoadingWatchSearch: true };
    default:
      return state;
  }
};
