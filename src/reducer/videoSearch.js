import {
  VIDEO_FETCH_SUCCESS,
  VIDEO_FETCH_FAIL,
  LOADING_VIDEOS,
  LOADING_SEARCH_VIDEOS,
  VIDEO_SEARCH_FAIL,
  VIDEO_SEARCH_SUCCESS,
} from "../action/constants";

const initialState = {
  isLoading: false,
  fetchVideos: [],
  errorMsg: "",
  isLoadingSearch: false,
  fetchSearchVideos: [],
  searchErrorMsg: "",
};

export const videoSearch = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_FETCH_SUCCESS:
      return {
        ...state,
        fetchVideos: action.data,
        isLoading: false,
        errorMsg: false,
      };
    case VIDEO_FETCH_FAIL:
      return {
        ...state,
        fetchVideo: {},
        isLoading: false,
        errorMsg: action.errorMsg,
      };
    case LOADING_VIDEOS:
      return { ...state, isLoading: true };
    case VIDEO_SEARCH_SUCCESS:
      return {
        ...state,
        fetchSearchVideos: action.data,
        isLoadingSearch: false,
        searchErrorMsg: false,
      };
    case VIDEO_SEARCH_FAIL:
      return {
        ...state,
        fetchSearchVideos: {},
        isLoadingSearch: false,
        searchErrorMsg: action.errorMsg,
      };
    case LOADING_SEARCH_VIDEOS:
      return { ...state, isLoadingSearch: true };
    default:
      return state;
  }
};
