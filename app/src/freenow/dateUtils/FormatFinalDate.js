function formatFinalDate(data) {
  // Função resposável por formatar datas finais para o padrão freenow
  // É adicionado 1 ao dia final pois a API do freenow funciona dessa forma
  // Pesquisando até o dia seguinte no horário de 03:59:59
  var values = data.split("/");
  var finalDate = new Date(values[2], values[1], values[0]);
  finalDate.setDate(finalDate.getDate() + 1);

  // Montando retorno
  var response = finalDate.getFullYear() + "-";
  response = response + validateLessThanTen(finalDate.getMonth()) + "-";
  response = response + validateLessThanTen(finalDate.getDate());

  return response;
}