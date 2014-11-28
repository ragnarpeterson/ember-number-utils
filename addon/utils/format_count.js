import formatFactory from './format_factory';

var UNITS = ['', 'K', 'M', 'B'],
    THRESHOLD = 1000;

export default formatFactory(THRESHOLD, UNITS);
