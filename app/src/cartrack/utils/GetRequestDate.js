function getRequestDate(data) {
  var initialDate = new Date();
  initialDate.setDate(initialDate.getDate() - 1);
  var finalDate = new Date();

  switch (data) {
    case '90 dias':
      finalDate.setDate(finalDate.getDate() - 90);
      break;
    case '30 dias':
      finalDate.setDate(finalDate.getDate() - 30);
      break;
    case '7 dias':
      finalDate.setDate(finalDate.getDate() - 7);
      break;
    case 'Ontem':
      finalDate.setDate(finalDate.getDate() - 1);
      break;
    default:
      SpreadsheetApp.getUi().alert("Valor inválido");
  }

  return {
    initialDate: initialDate,
    finalDate: finalDate
  };
}