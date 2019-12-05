import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import snooker from "./snooker";
import timer from "./timer";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    snooker,
    timer
  });
