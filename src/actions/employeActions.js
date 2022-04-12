import {
  EMPLOYE_LIST_REQUEST,
  EMPLOYE_LIST_SUCCESS,
  EMPLOYE_LIST_FAIL,
  EMPLOYE_DETAILS_REQUEST,
  EMPLOYE_DETAILS_SUCCESS,
  EMPLOYE_DETAILS_FAIL,
} from '../constants/employeConstants';

import axios from 'axios';

export const listEmployes = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYE_LIST_REQUEST });

    const { data } = await axios.get('http://localhost:8089/api/employes');
    dispatch({
      type: EMPLOYE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EmployeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8089/api/employes/${id}`
    );
    dispatch({
      type: EMPLOYE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
