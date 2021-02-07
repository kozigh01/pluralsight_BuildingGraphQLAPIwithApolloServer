const Mutation = {
    toggleFavoriteSession: (parent, {id}, {dataSources}, info) => dataSources.sessionAPI.toggleFavoriteSession(id),
    addNewSession: (parent, {session}, {dataSources}, info) => dataSources.sessionAPI.addNewSession(session),
};

module.exports = Mutation;