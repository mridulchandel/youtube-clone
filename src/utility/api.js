import { config } from "../config/youtubeConfig";
const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3/";
const searchUrl = "search?part=snippet&maxResults=12&q=";
const configSearchUrl = "&type=video&key=" + config.api_key;
const watchUrl = "videos?part=snippet&maxResults=12&id=";
const configWatchUrl = "&key=" + config.api_key;

export function getSearchApi(search = "song") {
  return youtubeBaseUrl + searchUrl + search + configSearchUrl;
}

export function getWatchApi(watchId) {
  return youtubeBaseUrl + watchUrl + watchId + configWatchUrl;
}
