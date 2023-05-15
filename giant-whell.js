const hasAccess = require('./has-access');

const minHeight = 150;

const canPlay = player => hasAccess(player, minHeight);

module.exports = canPlay