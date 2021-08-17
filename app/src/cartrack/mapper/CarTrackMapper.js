function carTrackMapper(data) {
  // Buscando planilha Dados
  var sheetsAPI = SpreadsheetApp.getActiveSpreadsheet();
  // Buscando aba CarTrack da planilha
  var carTrack = sheetsAPI.getSheets()[3];

  // Dividindo resultado em páginas
  var part = data.toString().split("Página");
  // Buscando datas de inicio e fim
  var dates = getDateObject(part[1]);
  // Preenchendo células com data de início e fim
  carTrack.getRange("B4").setValue(dates.initialDate);
  carTrack.getRange("B5").setValue(dates.finalDate);

  var initialRow = 8;

  // Iteração entre todas as partes que foram dividas em páginas
  for (var a = 1; a < part.length; a++) {
    // Separando dados do veiculo em partes
    var dadosDoVeiculo = part[a].split("23:59:59")[1];
    // Variavel para definir se a página possui total
    var totalExists = part[a].includes("Total");
    // Verificando se a próxima página é um veículo novo ou a continuação do veículo anterior
    if (dadosDoVeiculo != undefined) {
      var veiculoData = dadosDoVeiculo.split("Data relatório")[0];

      // Preenchendo titulos do header
      var headerVeiculo = veiculoData.split(":");
      // Preenchendo célula com o header de matrícula do veículo
      carTrack.getRange("A" + initialRow).setFontWeight("bold");
      carTrack.getRange("A" + initialRow).setValue(headerVeiculo[0].trim());
      // Preenchendo célula com o header de marca e modelo do veículo
      carTrack.getRange("B" + initialRow).setFontWeight("bold");
      carTrack.getRange("B" + initialRow).setValue(headerVeiculo[1].trim());
      // Preenchendo célula com o header de descrição do veículo
      carTrack.getRange("C" + initialRow).setFontWeight("bold");
      carTrack.getRange("C" + initialRow).setValue(headerVeiculo[2].trim());
      // Incrementando initialRow
      initialRow++;
      // Preenchendo values do header
      // Resultados do veiculo
      var resultValues = headerVeiculo[3].split(" ");
      // Preenchendo valor de matrícula
      carTrack.getRange("A" + initialRow ).setValue(resultValues[1]);
      // Preenchendo valor da marca e modelo
      var marcaEmodelo = resultValues[2] + " " + resultValues[3];
      carTrack.getRange("B" + initialRow).setValue(marcaEmodelo);
      // Incremento de mais 2 para pular linha
      initialRow+=2;    
      
      // Separando dados da tabela por carro
      var table = part[a].split("By:")[1];
      var tableData = table.split(" ");
      // Inserindo valores de titulos da tabela
      carTrack.getRange("A" + initialRow).setFontWeight("bold");
      carTrack.getRange("B" + initialRow).setFontWeight("bold");
      carTrack.getRange("C" + initialRow).setFontWeight("bold");
      carTrack.getRange("D" + initialRow).setFontWeight("bold");
      carTrack.getRange("E" + initialRow).setFontWeight("bold");
      carTrack.getRange("A" + initialRow).setValue(tableData[1].trim());
      carTrack.getRange("B" + initialRow).setValue(tableData[2] + " " + tableData[3] + " " + tableData[4]);
      carTrack.getRange("C" + initialRow).setValue(tableData[5]);
      carTrack.getRange("D" + initialRow).setValue(tableData[6]);
      carTrack.getRange("E" + initialRow).setValue(tableData[7]);
      // Incremento initialRow
      initialRow++;
      
      if (totalExists) {
        // Inserindo valores da tabela por veículo
        for (var x = 8; x < tableData.length - 9; x++) {
          // Table values
          var formattedDate = cartTrackFormatDatePT(tableData[x]);
          carTrack.getRange("A" + initialRow).setValue(formattedDate);
          x++;
          carTrack.getRange("B" + initialRow).setValue(tableData[x]);
          x++;
          var initialCode = tableData[x];
          x++;
          var initialValue = tableData[x];
          x++;
          carTrack.getRange("C" + initialRow).setValue(initialCode + " " + initialValue);
          var finalCode = tableData[x];
          x++;
          var finalValue = tableData[x];
          x++;
          carTrack.getRange("D" + initialRow).setValue(finalCode + " " + finalValue);
          
          // Validação para distância maior que 999
          var distanceValidation = tableData[x].includes(",");
          if (distanceValidation) {
            carTrack.getRange("E" + initialRow).setValue(tableData[x]);
          } else {
            var thousandValue = tableData[x];
            x++;
            var distance = thousandValue + tableData[x];
            carTrack.getRange("E" + initialRow).setValue(distance);
          }
          initialRow++;
        }

        if (tableData[tableData.length -3] == "Total:") {
          carTrack.getRange("D" + initialRow).setFontWeight("bold");
          carTrack.getRange("E" + initialRow).setFontWeight("bold");
          carTrack.getRange("D" + initialRow).setValue(tableData[tableData.length -3]);
          carTrack.getRange("E" + initialRow).setValue(tableData[tableData.length -2]);
        } else {
          var total = tableData[tableData.length -3] + tableData[tableData.length -2];
          carTrack.getRange("D" + initialRow).setFontWeight("bold");
          carTrack.getRange("E" + initialRow).setFontWeight("bold");
          carTrack.getRange("D" + initialRow).setValue(tableData[tableData.length -4]);
          carTrack.getRange("E" + initialRow).setValue(total);
        }

        initialRow+=2;
      } else {
        // Inserindo valores da tabela por veículo
        for (var x = 8; x < tableData.length - 6; x++) {
          // Table values
          var formattedDate = cartTrackFormatDatePT(tableData[x]);
          carTrack.getRange("A" + initialRow).setValue(formattedDate);
          x++;
          carTrack.getRange("B" + initialRow).setValue(tableData[x]);
          x++;
          var initialCode = tableData[x];
          x++;
          var initialValue = tableData[x];
          x++;
          carTrack.getRange("C" + initialRow).setValue(initialCode + " " + initialValue);
          var finalCode = tableData[x];
          x++;
          var finalValue = tableData[x];
          x++;
          carTrack.getRange("D" + initialRow).setValue(finalCode + " " + finalValue);
          
          // Validação para distância maior que 999
          var distanceValidation = tableData[x].includes(",");
          if (distanceValidation) {
            carTrack.getRange("E" + initialRow).setValue(tableData[x]);
          } else {
            var thousandValue = tableData[x];
            x++;
            var distance = thousandValue + tableData[x];
            carTrack.getRange("E" + initialRow).setValue(distance);
          }
          initialRow++;
        }
      }
    } else {
      // Separando dados da tabela por carro
      var tableNext = part[a].split("By:")[1];
      var tableDataNext = tableNext.split(" ");
      
      if (totalExists) {
        // Inserindo valores da tabela por veículo
        for (var x = 1; x < tableDataNext.length - 9; x++) {
          // Table values
          var formattedDate = cartTrackFormatDatePT(tableDataNext[x]);
          carTrack.getRange("A" + initialRow).setValue(formattedDate);
          x++;
          carTrack.getRange("B" + initialRow).setValue(tableDataNext[x]);
          x++;
          var initialCode = tableDataNext[x];
          x++;
          var initialValue = tableDataNext[x];
          x++;
          carTrack.getRange("C" + initialRow).setValue(initialCode + " " + initialValue);
          var finalCode = tableDataNext[x];
          x++;
          var finalValue = tableDataNext[x];
          x++;
          carTrack.getRange("D" + initialRow).setValue(finalCode + " " + finalValue);

          // Validação para distância maior que 999
          var distanceValidation = tableDataNext[x].includes(",");
          if (distanceValidation) {
            carTrack.getRange("E" + initialRow).setValue(tableDataNext[x]);
          } else {
            var thousandValue = tableDataNext[x];
            x++;
            var distance = thousandValue + tableDataNext[x];
            carTrack.getRange("E" + initialRow).setValue(distance);
          }
          initialRow++;
        }

        if (tableDataNext[tableDataNext.length -3] == "Total:") {
          carTrack.getRange("D" + initialRow).setFontWeight("bold");
          carTrack.getRange("E" + initialRow).setFontWeight("bold");
          carTrack.getRange("D" + initialRow).setValue(tableDataNext[tableDataNext.length -3]);
          carTrack.getRange("E" + initialRow).setValue(tableDataNext[tableDataNext.length -2]);
        } else {
          var total = tableDataNext[tableDataNext.length -3] + tableDataNext[tableDataNext.length -2];
          carTrack.getRange("D" + initialRow).setFontWeight("bold");
          carTrack.getRange("E" + initialRow).setFontWeight("bold");
          carTrack.getRange("D" + initialRow).setValue(tableDataNext[tableDataNext.length -4]);
          carTrack.getRange("E" + initialRow).setValue(total);
        }

        initialRow+=2;
      } else {
        // Inserindo valores da tabela por veículo
        for (var x = 8; x < tableDataNext.length - 9; x++) {
          // Table values
          var formattedDate = cartTrackFormatDatePT(tableDataNext[x]);
          carTrack.getRange("A" + initialRow).setValue(formattedDate);
          x++;
          carTrack.getRange("B" + initialRow).setValue(tableDataNext[x]);
          x++;
          var initialCode = tableDataNext[x];
          x++;
          var initialValue = tableDataNext[x];
          x++;
          carTrack.getRange("C" + initialRow).setValue(initialCode + " " + initialValue);
          var finalCode = tableDataNext[x];
          x++;
          var finalValue = tableDataNext[x];
          x++;
          carTrack.getRange("D" + initialRow).setValue(finalCode + " " + finalValue);
          
          // Validação para distância maior que 999
          var distanceValidation = tableData[x].includes(",");
          if (distanceValidation) {
            carTrack.getRange("E" + initialRow).setValue(tableData[x]);
          } else {
            var thousandValue = tableData[x];
            x++;
            var distance = thousandValue + tableData[x];
            carTrack.getRange("E" + initialRow).setValue(distance);
          }
          initialRow++;
        }
      }
    }
  }
  
}
  