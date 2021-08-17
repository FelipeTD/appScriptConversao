function postViaVerde(initialDate, finalDate) {
  var url = 'https://www.viaverde.pt/empresas/DesktopModules/MVC/Transactions/Default/GetTransactions';

  var formattedInitialDate = initialDate + "T03:00:00.000Z";
  var formattedFinalDate = finalDate + "T03:00:00.000Z";

  var formData = {
    'contractList': [516818247],
    'serviceTypeList': [4,-1,5,10,6,2,3,11,8,7],
    'paymentMethodList': [1,2,4,3],
    'paymentStatusList': [0,1,2],
    'maxRows': 1000,
    'currentRow': 1,
    'fromDate': formattedInitialDate,
    'toDate': formattedFinalDate,
    'identifiers': []
  }

  // Passando null para evitar vazamento de dados
  var cookie = null;

  var options = {
    'headers': {
          'Cookie': cookie,
          'moduleid': '4202',
          'tabid': '3201',
          'Content-Type': 'application/json'
    },
    'muteHttpExceptions': true,
    'method' : 'post',
    'payload': JSON.stringify(formData)
  };

  return UrlFetchApp.fetch(url, options);
  
}
  