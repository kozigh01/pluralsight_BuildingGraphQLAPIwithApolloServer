const _ = require('lodash');
const {ApolloError} = require('apollo-server');

const Session = {
    speakers: async (session, args, {dataSources}, info) => {
        try {
            const speakers = await dataSources.speakerAPI.getSpeakers();
            const returns = speakers.filter(speaker => _.filter(session.speakers, {id: speaker.id}).length > 0);
            return returns;
        } catch (err) {
            console.log(err);
            if (err.extensions.code == "INTERNAL_SERVER_ERROR") {
                return new ApolloError(
                    "Unable to retrieve speakers",
                    "SPEAKERAPIERROR",
                    { token: "UNIQUETOKEN" }
                );            
            }
            return err;
        }
    }
};

module.exports = Session;