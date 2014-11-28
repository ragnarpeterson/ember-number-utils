export default function formatFactory(threshold, units, digits) {
  return function(number) {
    var unitIndex = 0;

    if (number > threshold) {
      do {
        number /= threshold;
        ++unitIndex;
      } while (number >= threshold);
    }

    return number.toFixed(digits) + units[unitIndex];
  };
}
