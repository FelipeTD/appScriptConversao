function getCarTrackValue(carTrackTab) {
  // Valor de lista de opções para analise
  var requestDateValue = carTrackTab.getRange("B2").getValue();
  // Valor da data inicial e data final
  var dateValue = getRequestDate(requestDateValue);
  // Valor de datas formatadas
  return carTrackFormateDate(dateValue);
}  