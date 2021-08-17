function bodyMapperPrio(bodyData, initialRow) {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba Prio da planilha
  var prioTab = sheetsAPI.getSheets()[4];

  // Valores de cada linha
  var bodyValues = bodyData.split("<tr>");

  for (x = 0; x < bodyValues.length; x++) {
    var body = bodyValues[x];
    var lineValues = body.split("<td");
    for (var y = 0; y < lineValues.length; y++) {
      var lineValue = lineValues[y].split(">");
      if (lineValue[1] != null) {
        switch (y) {
          case 1:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("A" + initialRow).setValue(formatWord(formattedValue));
            break;
          case 2:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("B" + initialRow).setValue(formattedValue);
            break;
          case 3:
            formattedValue = lineValue[2].replace("</div", "\n") + lineValue[4].replace("</div", "");
            prioTab.getRange("C" + initialRow).setValue(formattedValue);
            break;
          case 4:
            var cardCode = lineValue[4].split("<div");
            formattedValue = lineValue[2].replace("</div", "\n") + cardCode[0];
            prioTab.getRange("D" + initialRow).setValue(formattedValue);
            break;
          case 5:
            formattedValue = lineValue[2].replace("</span", "");
            prioTab.getRange("E" + initialRow).setValue(formattedValue);
            break;
          case 6:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("F" + initialRow).setValue(formattedValue);
            break;
          case 7:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("G" + initialRow).setValue(formattedValue);
            break;
          case 8:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("H" + initialRow).setValue(formattedValue);
            break;
          case 9:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("I" + initialRow).setValue(formattedValue);
            break;
          case 10:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("J" + initialRow).setValue(formattedValue);
            break;
          case 11:
            formattedValue = lineValue[1].replace("</td", "");
            prioTab.getRange("K" + initialRow).setValue(formattedValue);
            break;
          case 12:
            formattedValue = lineValue[26].replace("</span", "");
            prioTab.getRange("L" + initialRow).setValue(formattedValue);
            break;
          default:
            formattedValue = lineValue;
            break;
        }
      }
    }
    initialRow++;
  }
  return initialRow - 1;
}