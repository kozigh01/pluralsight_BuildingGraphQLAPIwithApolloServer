const _ = require('lodash');

const Session = {
    speakers: async (session, args, {dataSources}, info) => {
        const speakers = await dataSources.speakerAPI.getSpeakers();
        const returns = speakers.filter(speaker => _.filter(session.speakers, {id: speaker.id}).length > 0);
        return returns;
    }
};

module.exports = Session;