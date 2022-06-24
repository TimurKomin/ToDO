import { ApolloCache } from "@apollo/react-hooks";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink, HttpLink } from "apollo-link-http";

const linkinpark =  createHttpLink({
  uri: "http://localhost:4002/graphql",
});

const client = new ApolloClient({
  link: linkinpark,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
