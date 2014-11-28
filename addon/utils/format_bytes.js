import formatFactory from './format_factory';

var UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    THRESHOLD = 1024;

export default formatFactory(THRESHOLD, UNITS);
