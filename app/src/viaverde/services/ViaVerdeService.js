function viaVerdeService() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba ViaVerde da planilha
  var viaVerdeTab = sheetsAPI.getSheets()[5];
  // Resetando os dados da aba viaVerde
  viaVerdeResetData(viaVerdeTab);
  // Pegando data inicial e final
  var initialDate = formatPrioRequestDate(viaVerdeTab.getRange("B1").getValue());
  var finalDate = formatPrioRequestDate(viaVerdeTab.getRange("B2").getValue());
  // Buscando dados do site ViaVerde
  var response = postViaVerde(initialDate, finalDate);
  // Transformando dados em objeto Json
  var json = JSON.parse(response);
  // Mapeamento dos dados retornados
  mapperViaVerde(json, viaVerdeTab);
  // Retornando mensagem de sucesso
  SpreadsheetApp.getUi().alert("Dados de ViaVerde atualizados com sucesso");
  return null;
}
  