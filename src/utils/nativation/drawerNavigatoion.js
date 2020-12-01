import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';

import HomePage from '../../components/HomePage';
import Profile from '../../components/profile';
import Logout from '../../components/logout';

const Drawer = createDrawerNavigator();
const drawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName={'Home'}
    drawerStyle={{backgroundColor: 'black'}}
    drawerContentOptions={{
      activeTintColor: 'white',
      activeBackgroundColor: 'gray',
      inactiveTintColor: 'white',

      labelStyle: {
        marginLeft: 5,
      },
    }}>
    <Drawer.Screen
      name="Home"
      component={HomePage}
      options={{
        drawerLabel: () => <Icon name="home" size={20} color="white" />,
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
      name="Logout"
      component={Logout}
      options={{
        drawerIcon: () => <Icon name="logout" size={20} color="white" />,
      }}
    />

    {/*    
        
        
       
        <Drawer.Screen
          name="Advanced Search"
          component={AdvancedSearch}
          options={{
            drawerIcon: () => <Icon name="search1" size={20} color="white" />,
          }}
        />
           <Drawer.Screen
          name="Demo"
          component={Demo}
          options={{
            drawerIcon: () => <Icon name="search1" size={20} color="white" />,
          }}/>
        */}
  </Drawer.Navigator>
);

export default drawerNavigation;
