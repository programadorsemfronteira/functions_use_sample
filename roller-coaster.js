const hasAccess = require('./has-access');

const minHeight = 160;

const canPlay = player => hasAccess(player, minHeight);

module.exports = canPlay