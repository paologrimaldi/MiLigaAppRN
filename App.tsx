/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import CrearCuenta from './views/CrearCuenta';
import NVLogin from './views/NVLogin';
import Dashboard from './views/Dashboard';

function App(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={NVLogin}
        options={{
          title: 'Iniciar Sesion',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CrearCuenta"
        component={CrearCuenta}
        options={{
          title: 'Crear Cuenta',

          headerStyle: {
            backgroundColor: '#D8D8D8',
          },
        }}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#D8D8D8',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
