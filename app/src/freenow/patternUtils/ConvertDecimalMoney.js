function convertDecimalMoney(data) {
  var formattedMoney = data.toString().replace(".", ",");
  return formattedMoney;
}