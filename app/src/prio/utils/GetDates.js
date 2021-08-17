function getDates() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Prio da planilha
  var prioTab = sheetsAPI.getSheets()[4];
  // Buscando valores de inicio e fim
  var initialDate = prioTab.getRange("B1").getValue();
  var finalDate = prioTab.getRange("B2").getValue();
  // Verificando a diferença entre as duas datas
  var diffDays = calculateDaysDiff(initialDate, finalDate);
  var response = [];

  if (diffDays <= 9) {
    response.push(formatPrioRequestDate(initialDate));
    response.push(formatPrioRequestDate(finalDate));
  } else {
    // Inicio 01/09/2020 Fim 30/09/2020
    // diferença 29
    // primeira chamada deve ser 01/09/2020 a 10/09/2020
    // segunda chamada deve ser 11/09/2020 a 20/09/2020
    // terceira chamada deve ser 21/09/2020 a 30/09/2020
    while (diffDays >= 9) {
      response.push(formatPrioRequestDate(initialDate));
      var auxFinalDate = initialDate;
      auxFinalDate.setDate(initialDate.getDate() + 9);
      response.push(formatPrioRequestDate(auxFinalDate));
      auxFinalDate.setDate(auxFinalDate.getDate() + 1);
      initialDate.setDate(auxFinalDate.getDate());
      diffDays = calculateDaysDiff(initialDate, finalDate);
    }

    if (diffDays > 1 || diffDays == 0) {
      response.push(formatPrioRequestDate(initialDate));
      response.push(formatPrioRequestDate(finalDate));
    }
  }
  return response;
  
}