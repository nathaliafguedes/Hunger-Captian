import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ItemReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case Actions.FETCH_ITEM:
      return {
        
        list: action.payload,
      };

    default:
      return state;
  }

}
