function carTrackFormateDate(data) {
  // Padrão 2021-05-16 00:00:00
  var formattedInitialDate = data.initialDate.getFullYear() + "-"
    + validateLessThanTen(data.initialDate.getMonth() + 1) + "-"
    + validateLessThanTen(data.initialDate.getDate()) + " 23:59:59";
  
  // Padrão 2021-08-13 23:59:59
  var formattedFinalDate = data.finalDate.getFullYear() + "-"
    + validateLessThanTen(data.finalDate.getMonth() + 1) + "-"
    + validateLessThanTen(data.finalDate.getDate()) + " 00:00:00";

  return {
    formattedInitialDate: formattedInitialDate,
    formattedFinalDate: formattedFinalDate
  }
}