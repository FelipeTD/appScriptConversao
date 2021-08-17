function reservationHistoryMapper(data, freenow_tab) {

  var result = JSON.parse(data);

  // Lista com todos os dados de histórico de reservas
  var resultList = result.bookingRecordList;

  var celulaInicial = 5;

  for (x=0; x < result.totalCount; x++) {

    // ID do motorista pega do resultList.driver.publicId
    freenow_tab.getRange("A" + celulaInicial).setValue(resultList[x].driver.publicId);

    // Nome do motorista é uma junção de resultList.driver.firstName com resultList.driver.lastName
    freenow_tab.getRange("B" + celulaInicial).setValue(resultList[x].driver.firstName + " " 
                                                        + resultList[x].driver.lastName);

    // Rota é uma junção do local onde o passageiro é pego com o destino do passageiro
    // Primeiro montando o local onde o passageiro está sendo pego
    var startPlace = resultList[x].pickupLocation.streetName + " " 
                        + resultList[x].pickupLocation.streetNumber + ", "
                        + resultList[x].pickupLocation.cityCode + ". "
                        + resultList[x].pickupLocation.cityName + " "
                        + resultList[x].pickupLocation.countryCode + "\n";
    // Segundo montando o destino do passageiro
    var endPlace = resultList[x].dropoffLocation.streetName + " " 
                        + resultList[x].dropoffLocation.streetNumber + ", "
                        + resultList[x].dropoffLocation.cityCode + ". "
                        + resultList[x].dropoffLocation.cityName + " "
                        + resultList[x].dropoffLocation.countryCode;
    // Preenchendo a célula com os valores de inicio e fim
    freenow_tab.getRange("C" + celulaInicial).setValue(startPlace + endPlace);

    // Hora de recolha/largada composto pelos campos Horário de recolha + Horário de largada
    // Horário de recolha. Padrão 07/07/2021 21:48:21 \n07/07/2021 22:05:10
    var pickupDate = formatDateAndHourFreeNow(resultList[x].pickupDate);
    // Horário de largada
    var dropoffDate = formatDateAndHourFreeNow(resultList[x].dropoffDate);
    // Preenchendo a célula com os valores de Horário de recolha e Horário de largada
    freenow_tab.getRange("D" + celulaInicial).setValue(pickupDate + "\n" + dropoffDate);

    // Viagem composto por tempo de viagem e distância
    // Tempo de viagem. Padrão 16:48 min
    var travelTime = convertInMinutes(resultList[x].routeDuration);
    // Distância. Padrão 16.29 km
    var distanceInKM = convertInKM(resultList[x].routeDistance);
    // Preenchendo a célula com os valores tempo de viagem e distância
    freenow_tab.getRange("E" + celulaInicial).setValue(travelTime + "\n" + distanceInKM);

    // Valor composto por resultList.tourValue.currency + resultList.tourValue.amount +  
    // resultList.tourValue.taxPercentage
    // Padrão Total € 11,43 \nNIF 6%
    // Valor da corrida (tourValue.currency + tourValue.amount). Padrão Total € 11,43
    var total = "Total " + convertCurrency(resultList[x].tourValue.currency) + " " + resultList[x].tourValue.amount;
    // Porcentagem (tourValue.taxPercentage) NIF 6%
    var percentage = "NIF " + resultList[x].tourValue.taxPercentage + "%";
    // Preenchendo a célula com os valores total e percentage
    freenow_tab.getRange("F" + celulaInicial).setValue(total + "\n" + percentage);

    // Extra composto por tourValue.currency + tourValue.tip. Padrão Gorjeta € 0,00 \nPortagem € 0,00
    // Gorjeta
    var tip = "Gorjeta " + convertCurrency(resultList[x].tourValue.currency) + " " + resultList[x].tourValue.tip;
    // Portagem
    var toll = "Portagem " + convertCurrency(resultList[x].tourValue.currency) + " " + resultList[x].tourValue.tip;
    // Preenchendo a célula com os valores tip e toll
    freenow_tab.getRange("G" + celulaInicial).setValue(tip + "\n" + toll);

    // Serviço composto por resultList.hailingType + resultList.subFleetTypeLabel
    freenow_tab.getRange("H" + celulaInicial).setValue(resultList[x].hailingType 
      + "/" + resultList[x].subFleetTypeLabel);

    // Métodos de pagamento composto por resultList.paymentMethod
    var paymentMethod = resultList[x].paymentMethod.toLowerCase();
    freenow_tab.getRange("I" + celulaInicial).setValue(paymentMethod[0].toUpperCase() + paymentMethod.substr(1));
    celulaInicial++;
  }
}