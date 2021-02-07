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
  type Mutation {
    toggleFavoriteSession(id: ID!): Session
    addNewSession(session: SessionInput): Session
  }
  input SessionInput {
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    level: String
    favorite: Boolean
  }
  type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: Room,
    day: String,
    format: String,
    track: String @deprecated(reason: "need to stop using this..."),
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
  enum Room {
    Europa
    Sol
    Saturn
    Jupiter
    Earth
    Mercury
    Mars
    Pluto
    Uranus
    Venus
    Neptune
    Ganymede
    Io
    Titan
    Callisto
  }
`;

module.exports = typeDefs;