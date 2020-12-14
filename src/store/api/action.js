import {HomepageJson, ProfileJson, FilterJson} from './type';
import {BaseUrl} from '../../utils/Urls';

const Api = async (data) => {
  const res = await fetch(BaseUrl + data);
  const json = await res.json();
  return json;
};

export const HomePageMethod = (data) => {
  return {
    type: HomepageJson,
    value: Api(data),
  };
};

export const ProfileMethod = (data) => {
  return {
    type: ProfileJson,
    value: Api(data),
  };
};

export const FilterMethod = (data) => {
  return {
    type: FilterJson,
    value: Api(data),
  };
};
