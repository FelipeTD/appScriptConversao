function GetPrioService() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Prio da planilha
  var prioTab = sheetsAPI.getSheets()[4];
  // Resetando os dados para nova requisição
  prioResetData(prioTab);
  // Pegando datas da tabela
  var dates = getDates();
  Logger.log(dates);
  // Valor inicial para linhas
  var initialRow = 4;
  if (dates.length == 2) {
    // Chamada para buscar dados da tabela Prio
    var response = postPrio(dates[0], dates[1]);
    var tableHead = response.toString().split("thead")[1];
    var tableBody = response.toString().split("tbody")[1];
    // Preenchendo valores do cabeçalho
    headerMapperPrio(tableHead);
    // Preenchendo valores da tabela
    initialRow = bodyMapperPrio(tableBody, initialRow);
    Logger.log(initialRow);
  } else {
    for (var x = 0; x < dates.length; x+=2) {
      // Chamada para buscar dados da tabela Prio
      var response = postPrio(dates[x], dates[x + 1]);
      if (x == 0) {
        var tableHead = response.toString().split("thead")[1];
        // Preenchendo valores do cabeçalho
        headerMapperPrio(tableHead);
      }
      var tableBody = response.toString().split("tbody")[1];
      // Preenchendo valores da tabela
      initialRow = bodyMapperPrio(tableBody, initialRow);
      Logger.log(initialRow);
    }
  }
  // Retornando mensagem de sucesso
  SpreadsheetApp.getUi().alert("Dados de Prio atualizados com sucesso");
  return null;
}
  