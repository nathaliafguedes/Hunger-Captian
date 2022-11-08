import API from "../../API";
import { fetchItemAction } from "./actions";

const api = new API();

export const fetchItems = (params) => {
  return (dispatch) => {
    return api
      .getItems(params)
      .then((items) => {
        dispatch(fetchItemAction(items));
      })
      .catch((error) => {
        alert("Failed to connect API: /posts/");
      });
  };
};
