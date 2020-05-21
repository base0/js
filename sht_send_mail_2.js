const SHEET_NAME = "";
const SUBJECT = "";
const BODY = `สวัสดีครับคุณ NAME

ขอแสดงความนับถือ

`;

const TEST = false;             // if true, only first row is used

function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  var range = sheet.getDataRange();
  var data = range.getValues();
  var N = TEST ? 1 : data.length;
  for (var i = 0; i < N; i++) {
    var row = data[i];
    Logger.log(row[0]+row[1]+row[2]);
    sendMail(row[0], row[1], row[2]);
  }
}

function sendMail(recipient, name, url) {
   var body = BODY;
   body = body.replace("NAME", name);
   MailApp.sendEmail(recipient, SUBJECT, body);
}
