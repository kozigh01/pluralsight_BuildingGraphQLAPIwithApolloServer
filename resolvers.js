const resolvers = {
    Query: {
      sessions: (parent, args, context, info) => context.dataSources.sessionAPI.getSessions(),
      sessionById: (parent, {id}, {dataSources}, info) => dataSources.sessionAPI.getSessionById(id),
      sessionsFiltered: (parent, args, {dataSources}, info) => dataSources.sessionAPI.getSessionsFiltered(args)
    }
  };

  module.exports = resolvers;