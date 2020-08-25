import {
  GET_HOME_VIDEOS,
  GET_SEARCH_VIDEOS,
  GET_WATCH_SEARCH_VIDEOS,
} from "./constants";

export const getHomeVideos = () => {
  return {
    type: GET_HOME_VIDEOS,
  };
};

export const getSearchVideos = (searchValue) => {
  return {
    type: GET_SEARCH_VIDEOS,
    searchValue,
  };
};

export const getWatchSearchVideos = (searchValue) => {
  return {
    type: GET_WATCH_SEARCH_VIDEOS,
    searchValue,
  };
};
