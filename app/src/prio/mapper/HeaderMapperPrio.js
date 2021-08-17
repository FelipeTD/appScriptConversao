function headerMapperPrio(headerData) {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Prio da planilha
  var prioTab = sheetsAPI.getSheets()[4];

  var headerValues = headerData.split("<th ");
  var response = [];

  for (var x = 1; x < headerValues.length - 1; x++) {
    // Valor de cada coluna sem tratamento
    var header = headerValues[x];
    // Valor semi formatado
    var headerValue = header.split("<")[0];
    // Valor formatado
    var formattedHeader = headerValue.split(">")[1];
    // Inserindo valores no vetor de retorno
    response.push(formatWord(formattedHeader).toUpperCase());
  }

  // O método setValues utiliza um vetor de duas dimensões
  var dataResponse = [];
  dataResponse.push(response);
  prioTab.getRange("A4:L4").setValues(dataResponse);

}