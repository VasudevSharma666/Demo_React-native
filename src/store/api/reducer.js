import {HomepageJson, ProfileJson, FilterJson, findFriends} from './type';

const initialState = {
  json: {
    homepage: [],
    profile: [],
    filter: [],
    findFriends: [],
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
    case findFriends: {
      return {...state, json: {...state.json, findFriends: action.data}};
    }
    default: {
      return {...state};
    }
  }
};
