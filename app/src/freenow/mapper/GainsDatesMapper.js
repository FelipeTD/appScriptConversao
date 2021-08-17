function gainsDatesMapper(data, freenowTabList) {
  var result = JSON.parse(data);
  var resultList = result.ranges;

  var celulaInicial = 1;

  // Padrão Desde 01/08/2021 até 08/08/2021
  for (var x = 0; x < resultList.length; x++) {
    // Convertendo código para enviar para URL
    var formattedCode = convertCode(resultList[x].key);
    // Preenchendo campo formatado da lista de pesquisa de datas
    freenowTabList.getRange("A" + celulaInicial).setValue("Desde "
      + formatRequestDate(resultList[x].startDate) + " "
      + "até "
      + formatRequestDate(resultList[x].endDate) + " - "
      + formattedCode);
    celulaInicial++;
  }
}