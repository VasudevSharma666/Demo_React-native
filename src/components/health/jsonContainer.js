import {hLogo, hospitalBuild, EmergencyBuild} from '../../constants/image';

export default {
  buttonData: [
    {
      id: 1,
      value: 'Saved',
      type: 'Saved',
    },
    {
      id: 2,
      value: 'Report',
      type: 'Alert',
    },
    {
      id: 3,
      value: 'Claim',
      type: 'shield',
    },
  ],
  Image: [
    {
      id: 1,
      value: hospitalBuild,
    },
    {
      id: 2,
      value: hLogo,
    },
    {
      id: 3,
      value: EmergencyBuild,
    },
  ],
  contactData: [
    {
      id: 1,
      data: 'Hondai',
      Icon: 'address',
    },
    {
      id: 2,
      data: '123546879',
      Icon: 'mobile',
    },
    {
      id: 3,
      data: 'xyz@gmail.com',
      Icon: 'mail',
    },
  ],
};
