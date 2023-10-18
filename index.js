import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import client from './config/apollo';
import {ApolloProvider} from '@apollo/client';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';

const upTaskApp = () => (
  <ApolloProvider client={client}>
    <GluestackUIProvider config={config}>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </GluestackUIProvider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => upTaskApp);
