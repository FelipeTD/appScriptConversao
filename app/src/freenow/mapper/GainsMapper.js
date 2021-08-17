function gainsMapper(data, freenowTabGains) {

  var result = JSON.parse(data);

  // Buscando valores totais de ganhos
  var totals = result.totals;
  // Preenchendo a célula total viagens com totals.totalTours 
  freenowTabGains.getRange("A4").setValue(totals.totalTours);
  // Preenchendo a célula bonus completados com totals.totalQuests
  freenowTabGains.getRange("B4").setValue(totals.totalQuests);

  // Buscando valores de ganhos por motorista
  var resultList = result.driverEarnings;

  var celulaInicial = 7;

  for (var x = 0; x < resultList.length; x++) {
    // Preenchendo a célula Motorista com resultList.driverPublicName
    freenowTabGains.getRange("A" + celulaInicial).setValue(resultList[x].driverPublicName);
    // Preenchendo a célula Serviços com resultList.hailingType
    freenowTabGains.getRange("B" + celulaInicial).setValue(resultList[x].hailingType);
    // Preenchendo a célula Viagens com resultList.totals.totalTours + resultList.tours.gross
    // + result.currency. Padrão Viagens (14) € 135,85
    // Convertendo ponto por virgula no valor
    var formattedMoney = convertDecimalMoney(resultList[x].tours.gross);
    // Convertendo currency
    var formattedCurrency = convertCurrency(result.currency);
    freenowTabGains.getRange("C" + celulaInicial).setValue("Viagens (" 
      + resultList[x].totals.totalTours 
      + ") "
      + formattedCurrency
      + " "
    + formattedMoney);

    // Preenchendo a célula Pago via App com resultList.tours.countPaidByApp + resultList.tours.grossApp
    // + result.currency. Padrão Pago via app (14) € 135,85
    // Convertendo ponto por virgula no valor pago via app
    var formattedGrossApp = convertDecimalMoney(resultList[x].tours.grossApp);
    freenowTabGains.getRange("D" + celulaInicial).setValue("Pago via app (" 
      + resultList[x].tours.countPaidByApp
      + ") "
      + formattedCurrency
      + " "
    + formattedGrossApp);

    // Preenchendo a célula PAGAMENTOS FORA DO APP com resultList.tours.countPaidByCash 
    // + resultList.tours.grossCash + result.currency. Padrão Pagamentos fora da app (0) € 0,00
    // Convertendo ponto por virgula no valor pago com dinheiro
    var formattedGrossCash = convertDecimalMoney(resultList[x].tours.grossCash);
    freenowTabGains.getRange("E" + celulaInicial).setValue("Pagamentos fora da app (" 
      + resultList[x].tours.countPaidByCash
      + ") "
      + formattedCurrency
      + " "
    + formattedGrossCash);

    // Preenchendo a célula CANCELAMENTOS com resultList.cancellationFees.gross
    // Padrão Cancelamentos € 0,00
    // Verificação para validar se campo cancellationFees existe
    if (resultList[x].cancellationFees != null) {
      var cancellationValue = convertDecimalMoney(resultList[x].cancellationFees.gross);
      freenowTabGains.getRange("F" + celulaInicial).setValue("Cancelamentos " + formattedCurrency + " "
      + cancellationValue);
    } else {
      freenowTabGains.getRange("F" + celulaInicial).setValue("Cancelamentos " + formattedCurrency + " 0,00");
    }

    // Preenchendo a célula VALOR TOTAL com resultList.totals.grossWithoutCommission + formattedCurrency
    // Padrão Valor total € 135,85
    // Convertendo ponto por virgula no valor total
    var formattedGrossWithoutCommission = convertDecimalMoney(resultList[x].totals.grossWithoutCommission);
    freenowTabGains.getRange("G" + celulaInicial).setValue("Valor total " + formattedCurrency + " " 
    + formattedGrossWithoutCommission);

    // Preenchendo a célula COMISSÃO com resultList.totals.commission + formattedCurrency
    // Padrão Comissão -€ 33,42
    // Convertendo ponto por virgula no valor da comissão
    var formattedCommission = convertDecimalMoney(resultList[x].totals.commission);
    freenowTabGains.getRange("H" + celulaInicial).setValue("Comissão -" + formattedCurrency + " " 
    + formattedCommission);

    // Preenchendo a célula GORJETAS com resultList.tips.gross + formattedCurrency
    // Padrão Gorjetas € 2,20
    var formattedTips = convertDecimalMoney(resultList[x].tips.gross);
    freenowTabGains.getRange("I" + celulaInicial).setValue("Gorjetas " + formattedCurrency + " " + formattedTips);

    // Preenchendo a célula INCENTIVOS com resultList.quests.gross + formattedCurrency
    // Padrão Incentivos € 0,00
    var formattedQuests = convertDecimalMoney(resultList[x].quests.gross);
    freenowTabGains.getRange("J" + celulaInicial).setValue("Incentivos " + formattedCurrency + " " 
    + formattedQuests);

    // Preenchendo a célula PORTAGENS com resultList.tolls.gross + formattedCurrency
    // Padrão Portagens € 2,05
    var formattedTolls = convertDecimalMoney(resultList[x].tolls.gross);
    freenowTabGains.getRange("K" + celulaInicial).setValue("Portagens " + formattedCurrency + " " + formattedTolls);

    // Preenchendo a célula OUTROS com resultList.others.gross + formattedCurrency
    // Padrão Outros € 5,17
    var formattedOthers = convertDecimalMoney(resultList[x].others.gross);
    freenowTabGains.getRange("L" + celulaInicial).setValue("Outros " + formattedCurrency + " " + formattedOthers);

    // Preenchendo a célula TOTAL DEVIDO com resultList.totals.gross + formattedCurrency
    // Padrão Total devido € 111,85
    var formattedGross = convertDecimalMoney(resultList[x].totals.gross);
    freenowTabGains.getRange("M" + celulaInicial).setValue("Total devido " + formattedCurrency + " " 
    + formattedGross);

    celulaInicial++;
  }
}