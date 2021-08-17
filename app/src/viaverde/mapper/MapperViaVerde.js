function mapperViaVerde(json, viaVerdeTab) {
  // Definindo linha inicial para preencher a planilha
  var initialRow = 5;
  // Preenchimento da planilha com os dados retornados
  for (var x = 0; x < json.TotalRows; x++) {
    viaVerdeTab.getRange("A" + initialRow).setValue(json.Transactions[x].Identifier);
    viaVerdeTab.getRange("B" + initialRow).setValue(json.Transactions[x].LicencePlateMobilityAccount);
    viaVerdeTab.getRange("C" + initialRow).setValue(json.Transactions[x].Description + "\n" 
      + json.Transactions[x].TransactionDates);
    viaVerdeTab.getRange("D" + initialRow).setValue(json.Transactions[x].ServiceDescription);
    viaVerdeTab.getRange("E" + initialRow).setValue(json.Transactions[x].PaymentMethod);
    viaVerdeTab.getRange("F" + initialRow).setValue(json.Transactions[x].NetValueWithCoin);
    var gValue = json.Transactions[x].ValueTooltipMessage != null ? 
      json.Transactions[x].ValueTooltipMessage.replace("<br>", "\n") : "";
    viaVerdeTab.getRange("G" + initialRow).setValue(gValue);
    var hValue = json.Transactions[x].PaymentStatusId == 1 ? "Pago" : "Não Pago";
    viaVerdeTab.getRange("H" + initialRow).setValue(hValue);
    viaVerdeTab.getRange("I" + initialRow).setValue(json.Transactions[x].PaymentDate);
    initialRow++;
  }
  
}
  