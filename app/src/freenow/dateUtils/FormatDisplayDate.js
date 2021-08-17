function formatDisplayDate(data) {
  var month = data.getMonth() + 1;
  return validateLessThanTen(data.getDate()) + "/"
          + validateLessThanTen(month) + "/"
          + data.getFullYear() + " "
          + validateLessThanTen(data.getHours()) 
          + ":" + validateLessThanTen(data.getMinutes()) 
          + ":" + validateLessThanTen(data.getSeconds());
}