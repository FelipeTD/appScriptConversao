function cartTrackFormatDatePT(data) {
  // Função resposável por formatar datas para o padrão dia/mes/ano
  var values = data.split("/");
  return values[2].trim() + "/" + values[1].trim() + "/" + values[0].trim();
}