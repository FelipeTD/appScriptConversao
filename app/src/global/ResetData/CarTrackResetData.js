function carTrackResetData(carTrackTab) {
  // Limpando dados aba CARTRACK
  carTrackTab.getRange("A8:E1000").clearContent();
  carTrackTab.getRange("A8:E1000").setFontWeight("normal");
}