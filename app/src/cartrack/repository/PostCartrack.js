function postCartrack(formattedDates) {
  // URL CarTrack
  var url ="https://fleetweb-pt.cartrack.com/jsonrpc/index.php";
  var data = {
  "version":"2.0","method":"ct_fleet_submit_client_report_v2","id":10,"params":{"x":"x","id":"7","delivery_type":"Web Link","email_address":"","prompts":[{"identifier":"start_date","value":"2021-05-16 00:00:00","type":"DATE"},{"identifier":"end_date","value":"2021-08-13 23:59:59","type":"DATE"},{"identifier":"Vehicle Name","value":"all","type":"VEHLIST"}],"zipped":false,"send_date":"2021-08-13 20:21:57+0100","file_format":"pdf","schedule":false,"schedule_end":"false","repeat_interval":"None","timezone":1000,"password":"","reportName":"203 Quilómetros Diários por Veículo"}
  };
  data.params.prompts[0].value = formattedDates.formattedFinalDate.toString();
  data.params.prompts[1].value = formattedDates.formattedInitialDate.toString();
  // Pegar Cookie de login no site
  // Cookie não foi passado para evitar vazamento de dados
  var cookie = null
  var options = {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'headers': {
          'Cookie': cookie
    },
    'payload' : JSON.stringify(data)
  };
  return UrlFetchApp.fetch(url, options);
}