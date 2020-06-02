const moment = require('moment');

module.exports = {
  getLastMoment: function(date,hour){
  return moment().startOf('hour').fromNow(); 
  }
};
