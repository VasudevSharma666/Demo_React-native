import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import HealthIcon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

import mainStyle from '../../components/commonComponents/mainStyle';
import HomePage from '../../components/HomePage';
import Filter from '../../components/filter';
import Profile from '../../components/profile';
import AdvancedSearch from '../../components/advancedSearch';
import Health from '../../components/health';
import findFriends from '../../components/findFriends';
import {tokenMethod} from '../../store/login/action';

const Drawer = createDrawerNavigator();

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenMethod(null));
  }, []);

  return <></>;
};

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
        drawerIcon: () => <Icon name="home" style={mainStyle.DrawerIcon} />,
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: () => <Icon name="user" style={mainStyle.DrawerIcon} />,
      }}
    />
    <Drawer.Screen
      name="Advanced Search"
      component={AdvancedSearch}
      options={{
        drawerIcon: () => <Icon name="search1" style={mainStyle.DrawerIcon} />,
      }}
    />
    <Drawer.Screen
      name="Health"
      component={Health}
      options={{
        drawerIcon: () => (
          <HealthIcon name="hospital-symbol" style={mainStyle.DrawerIcon} />
        ),
      }}
    />
    <Drawer.Screen
      name="Filter search"
      component={Filter}
      options={{
        drawerIcon: () => <Icon name="filter" style={mainStyle.DrawerIcon} />,
      }}
    />
    <Drawer.Screen
      name="Find Friends"
      component={findFriends}
      options={{
        drawerIcon: () => (
          <Icon name="addusergroup" style={mainStyle.DrawerIcon} />
        ),
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={Logout}
      options={{
        drawerIcon: () => <Icon name="logout" style={mainStyle.DrawerIcon} />,
      }}
    />
  </Drawer.Navigator>
);

export default drawerNavigation;
