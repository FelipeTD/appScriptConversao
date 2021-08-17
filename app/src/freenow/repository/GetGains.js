function getGains(weekCode) {
  // URL Ganhos
  var url = "https://api.live.mytaxi.com/partnermanagementgateway/proxy/partnerbffservice/v2/companies/148323/earnings?range=CLOSED%252C" + weekCode;
  var response = get(url);
  return response;
}