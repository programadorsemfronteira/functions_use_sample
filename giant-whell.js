const minHeight = 150;

const canPlay = ({ height, age, isAlone }) =>
    height >= minHeight && (age >= 18 || !isAlone);

module.exports = canPlay