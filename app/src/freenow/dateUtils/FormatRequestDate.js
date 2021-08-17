function formatRequestDate(data) {
  // Função resposável por formatar datas para exibição semanal
  var datavalue = data.split("T");
  var values = datavalue[0].split("-");
  return values[2] + "/" + values[1] + "/" + values[0];
}