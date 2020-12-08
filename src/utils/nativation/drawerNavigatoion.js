import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import HealthIcon from 'react-native-vector-icons/FontAwesome5';

import HomePage from '../../components/HomePage';
import Filter from '../../components/filter';
import Profile from '../../components/profile';
import Logout from '../../components/logout';
import AdvancedSearch from '../../components/advancedSearch';
import Health from '../../components/health';

const Drawer = createDrawerNavigator();
const drawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName={'Home'}
    drawerStyle={{backgroundColor: 'black'}}
    drawerContentOptions={{
      inactiveTintColor: 'white',
      activeTintColor: 'white',
      activeBackgroundColor: 'gray',

      labelStyle: {
        marginLeft: 5,
      },
    }}>
    <Drawer.Screen
      name="Home"
      component={HomePage}
      options={{
        drawerIcon: () => <Icon name="home" size={20} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: () => <Icon name="user" size={20} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Advanced Search"
      component={AdvancedSearch}
      options={{
        drawerIcon: () => <Icon name="search1" size={20} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Health"
      component={Health}
      options={{
        drawerIcon: () => (
          <HealthIcon name="hospital-symbol" size={20} color="white" />
        ),
      }}
    />
    <Drawer.Screen
      name="Filter search"
      component={Filter}
      options={{
        drawerIcon: () => <Icon name="filter" size={20} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={Logout}
      options={{
        drawerIcon: () => <Icon name="logout" size={20} color="white" />,
      }}
    />
  </Drawer.Navigator>
);

export default drawerNavigation;
