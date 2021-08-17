function convertCode(data) {
  var formattedCode = data.toString().split(",");
  return formattedCode[1];
}