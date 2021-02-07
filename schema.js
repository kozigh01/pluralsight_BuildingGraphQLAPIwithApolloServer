const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    sessions: [Session],
    sessionById(id: ID!): Session,
    sessionsFiltered(
      title: String,
      description: String,
      startsAt: String,
      endsAt: String,
      room: String,
      day: String,
      format: String,
      level: String      
    ): [Session],
    speakers: [Speaker],
    speakerById(id: ID!): Speaker
  }
  type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "need to stop using this..."),
    level: String
    speakers: [Speaker]
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
`;

module.exports = typeDefs;