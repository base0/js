// docs.google.com/spreadsheet

function sheetOnFormSubmit(e) {
  var sheet = e.source;
  var row = e.range.getLastRow();
  var col = 5;    // column to put confirmation code
  /*
  // for testing
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var row = 17;
  var col = 5;
  */
  
  var code = "c" + Math.random();
  sheet.getSheets()[0].getRange(row, col).setValue(code);

  var recipient = e.values[2];  // starts from [1].  [0] is timestamp
  var url = 'https://script.google.com/macros/s/AKfycbwsYKW7RWz5yCmtTVprqjvqzTq3p3oKO6kIQ7Hefnz95RTOVYFv/exec';
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
    sheet.getRange(row, +col + 1).setValue('yyyy');
    return 'your email has been confirmed';
  } else {
    return 'invalid code';
  }
}
