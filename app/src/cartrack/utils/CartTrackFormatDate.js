function cartTrackFormatDate(data) {
  // Função resposável por formatar datas para o padrão cartTrack
  var values = data.split("-");
  return values[2].trim() + "/" + values[1].trim() + "/" + values[0].trim();
}