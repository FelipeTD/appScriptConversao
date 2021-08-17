function getGainsDates() {
  var url = "https://api.live.mytaxi.com/partnermanagementgateway/proxy/partnerbffservice/v1/companies/148323/earnings/metadata";
  var response = get(url);
  return response;
}