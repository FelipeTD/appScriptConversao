function getGainsValue(freenowTabGains) {
  // Buscando código da semana para pesquisa
  var weekValue = freenowTabGains.getRange("B1").getValue();
  return weekValue.toString().split("-");
}