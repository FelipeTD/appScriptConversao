function convertInMinutes(data) {
  var minutesWithDecimal = (data / 60) / 1000;
  var minutes = Math.trunc((data / 60) / 1000);
  var secondsInDecimal = minutesWithDecimal - minutes;
  var seconds = Math.trunc(secondsInDecimal * 60);

  return minutes + ":" + seconds + " min";
}