import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext(async (_, {headers}) => {
  //Leer el token para poderlo enviar via header
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  headers: {Authorization: ''},
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink) as any,
});

export default client;
