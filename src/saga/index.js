import { all } from "redux-saga/effects";
import { watchVideoFetch } from "./videoSearch";

export function* rootSaga() {
  yield all([watchVideoFetch()]);
}
