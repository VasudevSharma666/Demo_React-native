import {BaseUrl} from './Urls';

export default (url) => {
  return new Promise((resolve, reject) => {
    fetch(BaseUrl + url)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
};
