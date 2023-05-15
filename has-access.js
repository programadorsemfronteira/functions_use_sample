const hasAccess = ({ height, age, isAlone }, minHeight) =>
    height >= minHeight && (age >= 18 || !isAlone);

module.exports = hasAccess