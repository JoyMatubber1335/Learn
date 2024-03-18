import { createStore } from "redux";
import { couterReducer } from "./redux/reducer/counterReducer";
export const store = createStore(couterReducer);
