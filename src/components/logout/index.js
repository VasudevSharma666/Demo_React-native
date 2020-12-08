import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {tokenMethod} from '../../store/login/action';
import {LogoutMethod} from '../../store/signin/action';

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tokenMethod(null));
    dispatch(LogoutMethod());
  }, []);

  return <></>;
};

export default index;
