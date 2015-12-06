emailColumn = 1;
myEmail = 'worasait.suwannik@gmail.com';

debug = false;

function myFunction() {
  var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    sendMail(values[i][emailColumn]);
  }
  
  MailApp.sendEmail(myEmail, 'already informed everyone', 'about ...')
}

function sendMail(recipient) {
  var subject = 'สวีดัด';
  var body = 'สวัสดี';
  
  if (debug)
    MailApp.sendEmail(recipient, subject, body);
  else 
    MailApp.sendEmail(myEmail, subject, body);
}
