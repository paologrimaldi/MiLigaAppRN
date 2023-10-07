import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Equipos from './Equipos';
import Perfil from './Perfil';
import Noticias from './Noticias';
import BuscarJugadores from './Buscar_Jugadores';
import Chats from './Chats';
import Icon6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createMaterialBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#CA14F7"
      inactiveColor="#D5D5D5"
      barStyle={{backgroundColor: '#2B2B2B'}}>
      <Tab.Screen
        name="Inicio"
        component={Noticias}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <Icon6 name="newspaper" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipos"
        component={Equipos}
        options={{
          tabBarLabel: 'Equipos',
          tabBarIcon: ({color}) => (
            <Icon6 name="people-group" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={BuscarJugadores}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon6 name="magnifying-glass" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({color}) => (
            <Icon6 name="message" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <Icon6 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
