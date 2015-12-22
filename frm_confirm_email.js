// docs.google.com/spreadsheet

function sheetOnFormSubmit(e) {
  var sheet = e.source;
  var row = e.range.getLastRow();
  var col = xxxx;    // TODO 2: column to put confirmation code (base 1)
  /*
  // for testing
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var row = 17;
  var col = 5;
  */
  
  var code = "c" + Math.random();
  sheet.getSheets()[0].getRange(row, col).setValue(code);

  var recipient = e.values[xxxxx];  // TODO 1: starts from [1].  [0] is timestamp
  var url = 'https://script.google.com/xxxxxxxxxxxxx';  // TODO 3: deploy the function doGet below to get the URL
  MailApp.sendEmail(recipient, 'กรุณายืนยันอีเมลของคุณ', 
                    'คุณได้กรอกอีเมลในแบบฟอร์ม...\n\n' +
                    'กรุณาคลิกที่ลิงค์ต่อไปนี้เพื่อยืนยันอีเมลของคุณ\n\n' +
                    url + '?sheetId=' + sheet.getId() + '&row=' + row + '&col=' + col + '&code=' + code);

}

// script.google.com

function doGet(request) {
  var sheetId = request.parameter.sheetId;
  var row = request.parameter.row;
  var col = request.parameter.col;
  var code = request.parameter.code;
  return ContentService.createTextOutput(checkCode(sheetId, row, col, code));
}

function checkCode(sheetId, row, col, code) {
  var sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];

  if (code == sheet.getRange(row, col).getValue()) {
    sheet.getRange(row, +col + 1).setValue('confirmed email');
    return 'your email has been confirmed';
  } else {
    return 'invalid code';
  }
}
