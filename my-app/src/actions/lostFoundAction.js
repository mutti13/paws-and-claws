import {
    LF_LISTMY_REQUEST,LF_LISTMY_SUCCESS,LF_LISTMY_FAIL, LF_LISTMY_RESET
} from "../constants/LostfoundConstants"
import axios from "axios"
export const listMyLostFound = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: LF_LISTMY_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/lfs/mylfs/`, config);
  
      dispatch({
        type: LF_LISTMY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LF_LISTMY_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };