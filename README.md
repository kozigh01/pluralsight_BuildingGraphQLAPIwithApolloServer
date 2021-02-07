# pluralsight_BuildingGraphQLAPIwithApolloServer
Pluralsight course: Building a GraphQL API with Apollo Server

## Sample Playground Query
```gql
query {
  speakerById(id: "381b010e-f51d-4fca-a249-271f72a6a5b9") {
    ...speakerFields
  }
  speakers {
    ...speakerFields
  }

  sessionById(id: "84375") {
    id
    title
    speakers {
      id
      name
    }
  }
  sessionsFiltered(room: "Sol", level: "Advanced") {
    title
    room
    level
  }
  sessions {
    id
    title
    room
    track
    level
  }
} 

fragment speakerFields on Speaker {
  id
  name
  bio
}
```

## Notes
* To turn off graphql playground locally, set the nodemonConfig -> env -> NODE_ENV to "production" (in package.json)
* To start the speakers api:
    * change directory to ./speakers-api
    * open new terminal
    * run: `$ npm install`
    * run: `$ npm start`
    * Go to http://localhost:3000/speakers to see if rest api is running properly