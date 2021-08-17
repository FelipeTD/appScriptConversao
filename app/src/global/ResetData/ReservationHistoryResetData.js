function reservationHistoryResetData(freenowTabReservation) {
  // Limpando dados aba FREENOW - RESERVAS
  freenowTabReservation.getRange("A5:I1000").clearContent();
}