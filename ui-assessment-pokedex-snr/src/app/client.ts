import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';

export const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: 'https://graphql-pokemon2.vercel.app',
    }),
  ]),
  cache: new InMemoryCache({}),
});
