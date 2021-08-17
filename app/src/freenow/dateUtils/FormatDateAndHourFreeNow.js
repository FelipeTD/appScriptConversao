function formatDateAndHourFreeNow(data) {
  // Função responsável por formatar hora de recolha/largada
  // É necessário adicionar 1 hora ao horário normal que é retornado pela API
  var dateAndHour = data.split("T");

  // Formatando data
  var dateValues = dateAndHour[0].split("-");
  var year = dateValues[0];
  // Colocando menos 1 porque os meses no javascript começam do zero
  var month = parseInt(dateValues[1]) - 1;
  var day = dateValues[2];

  // Formatando hora
  var timeValuesWithoutMiliseconds = dateAndHour[1].split(".")[0];
  var timeValues = timeValuesWithoutMiliseconds.split(":");
  var hour = timeValues[0];
  var minutes = timeValues[1];
  var seconds = timeValues[2];

  var date = new Date(year, month, day, hour, minutes, seconds);
  date.setHours(date.getHours() + 1);

  return formatDisplayDate(date);
}