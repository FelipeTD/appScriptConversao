function gainsService() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Ganhos da planilha
  var freenowTabGains = sheetsAPI.getSheets()[1];
  // Buscando aba com lista de datas disponiveis para pesquisa
  var freenowTabList = sheetsAPI.getSheets()[2];
  // Limpando dados para nova execução
  gainsResetData(freenowTabGains);
  // Chamada da API para buscar datas disponiveis para pesquisa
  var gainsDates = getGainsDates();
  // Inserindo valores na aba FREENOW - LIST
  // Mapeamento de datas disponiveis para o campo de pesquisa de data
  gainsDatesMapper(gainsDates, freenowTabList);
  // Pegando somente o código para enviar para a API
  var weekCode = getGainsValue(freenowTabGains);
  // Chamada da API para buscar os dados de ganhos
  var gainsData = getGains(weekCode[1].trim());
  // Mapeamento dos valores retornados para os campos corretos na planilha e tratamento dos dados
  gainsMapper(gainsData, freenowTabGains);
  SpreadsheetApp.getUi().alert("Dados de ganhos atualizados com sucesso");
  return null;
}