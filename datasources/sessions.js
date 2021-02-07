const sesions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions() {
    return sesions;
  }
}

module.exports = SessionAPI;