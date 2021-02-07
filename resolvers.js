const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');
const Session = require('./resolvers/session');

const resolvers = {
  Query,
  Mutation,
  Session
};

module.exports = resolvers;