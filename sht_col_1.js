function myFunction() {
  var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    Logger.log(values[i][1]);
  }
}
