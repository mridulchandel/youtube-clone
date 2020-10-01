import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";
import Router from "../Router";
import { rootReducer } from "../../reducer";
import { rootSaga } from "../../saga";

const Root = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <BrowserRouter basename="/youtube-clone">
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
