import {
  VIDEO_FETCH_SUCCESS,
  VIDEO_FETCH_FAIL,
  LOADING_VIDEOS,
} from "../action/constants";

const initialState = {
  isLoading: false,
  fetchVideos: [],
  errorMsg: "",
};

export const videoSearch = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_FETCH_SUCCESS:
      return {
        fetchVideos: action.data,
        isLoading: false,
        errorMsg: false,
      };
    case VIDEO_FETCH_FAIL:
      return {
        fetchVideo: {},
        isLoading: false,
        errorMsg: action.errorMsg,
      };
    case LOADING_VIDEOS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
