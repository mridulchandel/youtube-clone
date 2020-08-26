import { config } from "../config/youtubeConfig";
const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3/";
const configUrl = "&key=" + config.api_key;

export function getSearchApi(search = "song") {
  const searchUrl = "search?part=snippet&maxResults=12&type=video&q=";
  return youtubeBaseUrl + searchUrl + search + configUrl;
}

export function getWatchApi(watchId) {
  const watchUrl = "videos?part=statistics&part=snippet&maxResults=12&id=";
  return youtubeBaseUrl + watchUrl + watchId + configUrl;
}

export function getChannelApi(channelId) {
  const channelUrl = "channels?part=snippet&part=statistics&maxResults=12&id=";
  return youtubeBaseUrl + channelUrl + channelId + configUrl;
}
