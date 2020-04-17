import C from './constants';

const initialState = {
  items: [],
  status: {
    isLoading: false,
    isError: false,
  },
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_PAGE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };

    case C.FETCH_PAGE_SUCCESS:
      return {
        ...state,
        items: action.data,
        status: {
          ...state.status,
          isLoading: false,
        },
      };

    case C.FETCH_PAGE_FAILURE:
      return {
        ...initialState,
        status: {
          isError: true,
          isLoading: false,
          message: action.error,
        },
      };

    default:
      return state || initialState;
  }
};

export default pageReducer;
