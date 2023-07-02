import {
    LF_LISTMY_REQUEST,LF_LISTMY_SUCCESS,LF_LISTMY_FAIL, LF_LISTMY_RESET
} from "../constants/LostfoundConstants"

export const lostFoundReducer = (state = { lfs: [] }, action) => {
    switch (action.type) {
      case LF_LISTMY_REQUEST:
        return {
          loading: true,
        };
  
      case LF_LISTMY_SUCCESS:
        return {
          loading: false,
          lfs: action.payload,
        };
  
      case LF_LISTMY_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case LF_LISTMY_RESET:
        return { lfs: [] };
  
      default:
        return state;
    }
  };
  