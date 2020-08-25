import { combineReducers } from "redux";
import { videoSearch } from "./videoSearch";
import { videoWatch } from "./videoWatch";

export const rootReducer = combineReducers({
  videoSearch,
  videoWatch,
});
