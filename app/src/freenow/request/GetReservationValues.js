function getReservationValues(freenowTabReservation) {
  // Variaveis da função freenow
  var initialDate = freenowTabReservation.getRange("B1").getDisplayValue();
  var finalDate = freenowTabReservation.getRange("B2").getDisplayValue();

  // Tratamento nas datas para ficar no padrão do freenow
  var formatedInitialDate = formatDate(initialDate);
  var formatedFinalDate = formatFinalDate(finalDate);

  return {
    initialDate: formatedInitialDate,
    finalDate: formatedFinalDate
  };
}