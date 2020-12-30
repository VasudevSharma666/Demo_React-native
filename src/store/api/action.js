import {HomepageJson, ProfileJson, FilterJson, findFriends} from './type';

export const HomePageMethod = (data) => {
  return {
    type: HomepageJson,
    data: data,
  };
};

export const ProfileMethod = (data) => {
  return {
    type: ProfileJson,
    data: data,
  };
};

export const FilterMethod = (data) => {
  return {
    type: FilterJson,
    data: data,
  };
};

export const findFriendsMethod = (data) => {
  return {
    type: findFriends,
    data: data,
  };
};
