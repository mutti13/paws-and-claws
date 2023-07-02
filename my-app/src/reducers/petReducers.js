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
  PET_DETAILS_FAIL,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_RESET,
  PET_UPDATE_REQUEST,
  PET_UPDATE_FAIL,
  PET_UPDATE_SUCCESS,
  PET_UPDATE_RESET,
  PET_DELETE_REQUEST,
  PET_DELETE_SUCCESS,
  PET_DELETE_FAIL,
  CAT_LISTMY_REQUEST,
  CAT_LISTMY_FAIL,
  CAT_LISTMY_SUCCESS,
  CAT_LISTMY_RESET,
  DOG_LISTMY_REQUEST,
  DOG_LISTMY_SUCCESS,
  DOG_LISTMY_FAIL,
  DOG_LISTMY_RESET,
  DOG_DETAILS_REQUEST,
  DOG_DETAILS_SUCCESS,
  DOG_DETAILS_FAIL,
  DOG_DETAILS_RESET,
  DOG_UPDATE_REQUEST,
  DOG_UPDATE_SUCCESS,
  DOG_UPDATE_FAIL,
  DOG_UPDATE_RESET,
  DOG_DELETE_REQUEST,
  DOG_DELETE_FAIL,
  DOG_DELETE_SUCCESS,
} from "../constants/PetConstants";

export const catListReducer = (state = { cats: [] }, action) => {
  switch (action.type) {
    case CAT_LIST_REQUEST:
      return { loading: true };

    case CAT_LIST_SUCCESS:
      return { loading: false, cats: action.payload };

    case CAT_LIST_FAIL:
      return { loading: false, error: action.payload };

    case CAT_LIST_RESET:
      return { cats: [] };

    default:
      return state;
  }
};

export const dogListReducer = (state = { dogs: [] }, action) => {
  switch (action.type) {
    case DOG_LIST_REQUEST:
      return { loading: true };

    case DOG_LIST_SUCCESS:
      return { loading: false, dogs: action.payload };

    case DOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    case DOG_LIST_RESET:
      return { dogs: [] };

    default:
      return state;
  }
};

export const petDetailsReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case PET_DETAILS_REQUEST:
      return { ...state, loading: true };

    case PET_DETAILS_SUCCESS:
      return { loading: false, pet: action.payload };

    case PET_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case PET_DETAILS_RESET:
      return { pet: {} };

    default:
      return state;
  }
};

export const dogDetailsReducer = (state = { dog: {} }, action) => {
  switch (action.type) {
    case DOG_DETAILS_REQUEST:
      return { ...state, loading: true };

    case DOG_DETAILS_SUCCESS:
      return { loading: false, dog: action.payload };

    case DOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case DOG_DETAILS_RESET:
      return { dog: {} };

    default:
      return state;
  }
};

export const PetUpdateReducer = (state = { pet: [] }, action) => {
  switch (action.type) {
    case PET_UPDATE_REQUEST:
      return { loading: true };

    case PET_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case PET_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PET_UPDATE_RESET:
      return { pet: {} };

    default:
      return state;
  }
};

export const DogUpdateReducer = (state = { dog: [] }, action) => {
  switch (action.type) {
    case DOG_UPDATE_REQUEST:
      return { loading: true };

    case DOG_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case DOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case DOG_UPDATE_RESET:
      return { dog: {} };

    default:
      return state;
  }
};

export const petDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PET_DELETE_REQUEST:
      return { loading: true };

    case PET_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PET_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const dogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DOG_DELETE_REQUEST:
      return { loading: true };

    case DOG_DELETE_SUCCESS:
      return { loading: false, success: true };

    case DOG_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userCatReducer = (state = { userCats: [] }, action) => {
  switch (action.type) {
    case CAT_LISTMY_REQUEST:
      return {
        loading: true,
      };

    case CAT_LISTMY_SUCCESS:
      return {
        loading: false,
        userCats: action.payload,
      };

    case CAT_LISTMY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CAT_LISTMY_RESET:
      return { userCats: [] };

    default:
      return state;
  }
};

export const userDogReducer = (state = { userDogs: [] }, action) => {
  switch (action.type) {
    case DOG_LISTMY_REQUEST:
      return {
        loading: true,
      };

    case DOG_LISTMY_SUCCESS:
      return {
        loading: false,
        userDogs: action.payload,
      };

    case DOG_LISTMY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case DOG_LISTMY_RESET:
      return { userDogs: [] };

    default:
      return state;
  }
};
