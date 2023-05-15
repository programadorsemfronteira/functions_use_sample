const minHeight = 160;

const canPlay = ({ height, age, isAlone }) =>
    height >= minHeight && (age >= 18 || !isAlone);

module.exports = canPlay