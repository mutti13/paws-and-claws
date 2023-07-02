import axios from "axios";
import {
  CAT_LIST_REQUEST,
  CAT_LIST_SUCCESS,
  CAT_LIST_FAIL,
  CAT_LIST_RESET,
  DOG_LIST_REQUEST,
  DOG_LIST_SUCCESS,
  DOG_LIST_FAIL,
  DOG_LIST_RESET,
  PET_DETAILS_REQUEST,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_FAIL,
  PET_DETAILS_RESET,
  PET_UPDATE_REQUEST,
  PET_UPDATE_FAIL,
  PET_UPDATE_SUCCESS,
  PET_UPDATE_RESET,
  PET_DELETE_REQUEST,
  PET_DELETE_SUCCESS,
  PET_DELETE_FAIL,
  CAT_LISTMY_REQUEST,
  CAT_LISTMY_SUCCESS,
  CAT_LISTMY_FAIL,
  CAT_LISTMY_RESET,
  DOG_LISTMY_REQUEST,
  DOG_LISTMY_SUCCESS,
  DOG_LISTMY_FAIL,
  DOG_LISTMY_RESET,
  DOG_DETAILS_REQUEST,
  DOG_DETAILS_FAIL,
  DOG_DETAILS_SUCCESS,
  DOG_DETAILS_RESET,
  DOG_UPDATE_REQUEST,
  DOG_UPDATE_SUCCESS,
  DOG_UPDATE_FAIL,
  DOG_UPDATE_RESET,
  DOG_DELETE_REQUEST,
  DOG_DELETE_FAIL,
  DOG_DELETE_SUCCESS,
} from "../constants/PetConstants";

export const getPetDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PET_DETAILS_REQUEST,
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

    const { data } = await axios.get(`/api/pets/${id}/`, config);
    dispatch({
      type: PET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getDogDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOG_DETAILS_REQUEST,
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

    const { data } = await axios.get(`/api/pets/dog/${id}/`, config);
    dispatch({
      type: DOG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listCats = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAT_LIST_REQUEST,
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

    const { data } = await axios.get(`/api/pets/cats/`, config);
    dispatch({
      type: CAT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listDogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOG_LIST_REQUEST,
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

    const { data } = await axios.get(`/api/pets/dogs/`, config);
    dispatch({
      type: DOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOG_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const deletePet = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PET_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/pets/delete/${id}/`, config);
    dispatch({
      type: PET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PET_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateDog = (dog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOG_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/pets/update/dogs/${dog._id}/`,
      dog,
      config
    );
    dispatch({
      type: DOG_UPDATE_SUCCESS,
    });
    dispatch({
      type: DOG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updatePet = (pet) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PET_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/pets/update/${pet._id}/`,
      pet,
      config
    );
    dispatch({
      type: PET_UPDATE_SUCCESS,
    });
    dispatch({
      type: PET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PET_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listUserCats = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAT_LISTMY_REQUEST,
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

    const { data } = await axios.get(`/api/pets/mycats/`, config);

    dispatch({
      type: CAT_LISTMY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAT_LISTMY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listUserDogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOG_LISTMY_REQUEST,
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

    const { data } = await axios.get(`/api/pets/mydogs/`, config);

    dispatch({
      type: DOG_LISTMY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOG_LISTMY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteDog = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOG_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/pets/delete/dog/${id}/`, config);
    dispatch({
      type: DOG_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOG_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
