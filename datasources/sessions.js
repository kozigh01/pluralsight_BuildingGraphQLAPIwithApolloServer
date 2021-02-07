const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions() {
    return sessions;
  }

  getSessionById(id) {
    return sessions.filter(x => x.id == id)[0];
  }
  
  getSessionsFiltered(args) {
    return _.filter(sessions, args);
  }
}

module.exports = SessionAPI;