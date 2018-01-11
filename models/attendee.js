const Sequelize = require('../db/config.js');

const Attendee = Sequelize.define('attendee', {
  created_at: Sequelize.DATE,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  event_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Event,
      key: 'id'
    }
  }
});

module.exports = Attendee;