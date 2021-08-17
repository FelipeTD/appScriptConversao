function reservationHistoryService() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Reservas da planilha
  var freenowTabReservation = sheetsAPI.getSheets()[0];
  // Limpando dados para nova execução
  reservationHistoryResetData(freenowTabReservation);
  // Buscando valores da aba reservas
  var reservationValues = getReservationValues(freenowTabReservation);
  // Chamada da API para buscar os dados de histórico de reservas
  var data = getReservationHistory(reservationValues.initialDate, reservationValues.finalDate);
  // Mapeamento dos valores retornados para os campos corretos na planilha e tratamento dos dados
  reservationHistoryMapper(data, freenowTabReservation);
  SpreadsheetApp.getUi().alert("Dados de histórico de reservas atualizados com sucesso");
  return null;
}