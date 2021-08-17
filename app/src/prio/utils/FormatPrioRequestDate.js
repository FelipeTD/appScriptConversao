function formatPrioRequestDate(data) {
  var month = data.getMonth() + 1;
  return data.getFullYear() + "-"
          + validateLessThanTen(month) + "-"
          + validateLessThanTen(data.getDate());
}