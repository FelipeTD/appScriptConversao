function formatDate(data) {
  // Função resposável por formatar datas para o padrão freenow
  var values = data.split("/");
  return values[2] + "-" + values[1] + "-" + values[0];
}