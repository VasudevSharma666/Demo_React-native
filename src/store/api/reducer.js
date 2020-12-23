import {HomepageJson, ProfileJson, FilterJson} from './type';

const initialState = {
  json: {
    homepage: [],
    profile: [],
    filter: [],
  },
};

export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomepageJson: {
      return {...state, json: {...state.json, homepage: action.data}};
    }
    case ProfileJson: {
      return {...state, json: {...state.json, profile: action.data}};
    }
    case FilterJson: {
      return {...state, json: {...state.json, filter: action.data}};
    }
    default: {
      return {...state};
    }
  }
};
