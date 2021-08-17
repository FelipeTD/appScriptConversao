function calculateDaysDiff(initialDate, finalDate) {
  var timeDiff = Math.abs(finalDate.getTime() - initialDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}