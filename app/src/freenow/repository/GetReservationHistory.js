function getReservationHistory(formatedInitialDate, formatedFinalDate) {
  // URL Histórico de reservas
  var url ="https://api.live.mytaxi.com/partnermanagementgateway/proxy/partnerbffservice/v1/companies/148323/booking-records?from=" + formatedInitialDate + "T04:00:00.000%2B01:00&page=0&size=1000&to=" + formatedFinalDate + "T03:59:59.5959%2B01:00";
  // Objeto de retorno de histórico de reservas
  var response = get(url);
  return response;
}