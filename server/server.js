const express = require('express');
//const path = require('path');
//const db = require('./config/connection');
//const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./path/to/your/graphql/schema'); // Import your GraphQL schema
const resolvers = require('./path/to/your/graphql/resolvers'); // Import your GraphQL resolvers



const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

//app.use(routes);
app.listen(PORT, () => {
  console.log(`🌍 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
