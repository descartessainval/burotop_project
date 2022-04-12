import {
  EMPLOYE_LIST_REQUEST,
  EMPLOYE_LIST_SUCCESS,
  EMPLOYE_LIST_FAIL,
  EMPLOYE_DETAILS_REQUEST,
  EMPLOYE_DETAILS_SUCCESS,
  EMPLOYE_DETAILS_FAIL,
} from '../constants/employeConstants';

export const employeListReducer = (state = { employes: [] }, action) => {
  switch (action.type) {
    case EMPLOYE_LIST_REQUEST:
      return { loading: true, employes: [] };
    case EMPLOYE_LIST_SUCCESS:
      return { loading: false, employes: action.payload };
    case EMPLOYE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeDetailsReducer = (state = { employe: {} }, action) => {
  switch (action.type) {
    case EMPLOYE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case EMPLOYE_DETAILS_SUCCESS:
      return { loading: false, recette: action.payload };
    case EMPLOYE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
