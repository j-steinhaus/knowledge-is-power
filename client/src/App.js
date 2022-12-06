import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Login from './sections/Login';
import Home from './sections/Home';
// import 'login.css';
import Signup from './sections/Signup';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Primary />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
            <Route
              path="/Signup"
              element={<Signup />}
            />


          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;