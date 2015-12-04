// send email to all address in COL 1 (B)
function myFunction() {
  var EMAIL_COL = 1;  // 0 is A
  var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    sendMail(values[i][EMAIL_COL]);
  }
  
  var myEmail = 'me@gmail.com';
  MailApp.sendEmail(myEmail, 'already informed everyone', 'about ...')
}

function sendMail(recipient) {
  var subject = 'สวีดัด';
  var body = 'สวัสดี';
  MailApp.sendEmail(recipient, subject, body)
}
