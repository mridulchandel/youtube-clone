import { all } from "redux-saga/effects";
import { searchVideoFetch } from "./videoSearch";
import { watchVideoFetch } from "./videoWatch";

export function* rootSaga() {
  yield all([searchVideoFetch(), watchVideoFetch()]);
}
