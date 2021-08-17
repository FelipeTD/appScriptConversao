function getDateObject(data) {
  var initialDatePart = data.split("Data início: ");
  var formattedInitialDate = cartTrackFormatDate(initialDatePart[1].split(" 00:00:00 -")[0]);

  var finalDatePart = data.split("Data fim: ");
  var formattedFinalDate = cartTrackFormatDate(finalDatePart[1].split(" 23:59:59")[0]);

  return {
    initialDate: formattedInitialDate,
    finalDate: formattedFinalDate
  }
}