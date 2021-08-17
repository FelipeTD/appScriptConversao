function get(url) {
  // Passado null para evitar vazamento de dados
  var code_authorization = null;
  return UrlFetchApp.fetch(url, 
    {
      'muteHttpExceptions': true, 
      headers: {
        Authorization: code_authorization
      }
    });
}