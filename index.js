const {ApolloServer} = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  dataSources,
  // introspection: false,
  // playground: false
  debug: true, // set to false to prevent stack trace on error
  formatError: (err) => {
    if(err.extensions.code == 'INTERNAL_SERVER_ERROR') {
      return new ApolloError("We are experiencing some trouble", "ERROR", {token: "uniquetoken"});
    }
  },
});

server
  .listen({ port: process.env.PORT || 4000})
  .then(({url}) => {
    console.log(`graphQL running at ${url}`);
  });