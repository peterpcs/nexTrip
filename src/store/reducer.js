import { SET_ROUTES } from './actions'

const initialState = {
  routes: [],
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTES: {
      return { ...state, routes: [...action.routes] }
    }

    case 'ERROR': {
      return {
        error: action.error,
        routes: [],
      }
    }

    default:
      return state
  }
}
