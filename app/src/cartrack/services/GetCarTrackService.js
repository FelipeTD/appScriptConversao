function getCarTrackService() {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba CarTrack da planilha
  var carTrackTab = sheetsAPI.getSheets()[3];
  // Resetando os dados da planilha para nova consulta
  carTrackResetData(carTrackTab);
  // Pegando datas formatadas da planilha
  var formattedDates = getCarTrackValue(carTrackTab);
  // PDF de retorno CarTrack
  var response = postCartrack( formattedDates);
  // Criação do arquivo no drive
  var drive = DriveApp.createFile(response);
  // Pegando id do arquivo
  var id = drive.getId();
  // Pegando string do PDF
  var text = getTextFromPDF(id);
  // Mapeamento de dados para a planilha
  carTrackMapper(text.text);
  // Deletando PDF do drive apos preencher os dados
  Drive.Files.remove(id);
  // Retornando mensagem de sucesso
  SpreadsheetApp.getUi().alert("Dados de CarTrack atualizados com sucesso");
  return null;
}