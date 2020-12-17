import {HomepageJson, ProfileJson, FilterJson} from './type';
import fetchCall from '../../utils/fetchCall';

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
