const Query = {
    sessions: (parent, args, context, info) => context.dataSources.sessionAPI.getSessions(),
    sessionById: (parent, {id}, {dataSources}, info) => dataSources.sessionAPI.getSessionById(id),
    sessionsFiltered: (parent, args, {dataSources}, info) => dataSources.sessionAPI.getSessionsFiltered(args),
    speakers: (parent, args, {dataSources}, info) => dataSources.speakerAPI.getSpeakers(),
    speakerById: (parent, {id}, {dataSources}, info) => dataSources.speakerAPI.getSpeakerById(id)
};

module.exports = Query;