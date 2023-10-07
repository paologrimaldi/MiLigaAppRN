import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Equipos from './Equipos';
import Perfil from './Perfil';
import Noticias from './Noticias';
import BuscarJugadores from './Buscar_Jugadores';
import Chats from './Chats';

const Tab = createMaterialBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Inicio"
        component={Noticias}
        options={{
          tabBarLabel: 'Inicio',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipos"
        component={Equipos}
        options={{
          tabBarLabel: 'Equipos',
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={BuscarJugadores}
        options={{
          tabBarLabel: 'Buscar',
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
