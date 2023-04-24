import { combineReducers } from "redux";

import auth from "./auth";
import products from "./products";
import categories from "./categories"
export default combineReducers({
  auth: auth,
  products: products,
  categories: categories
});
