function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("unclaim");
  var range = sheet.getDataRange();
  var data = range.getValues();
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    Logger.log(row[0]+row[1]+row[2]);
  }
}

function sendMail(recipient, name, url) {
  var body = `สวัสดีครับ

ขอแสดงความนับถือ

base zero`;

   MailApp.sendEmail(recipient, "subject", body);
}

