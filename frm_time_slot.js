function sheetOnFormSubmit(e) {
  var emailCol = 6;
  var startTimeCol = 7;
  
  var sheet = e.source.getSheets()[0];
  var row = e.range.getLastRow();

  // set time slot
  sheet.getRange(row, startTimeCol).setValue("'" + getTime(row-2));
  sheet.getRange(row, startTimeCol + 1).setValue("'" + getTime(row-1));
  
  // send email
  var recipient = sheet.getRange(row, emailCol).getValue();
  var subject = 'schedule for presenting your Android project';
  var body = 'Hello\n\n'
           + 'You will present your project '
           + 'on January 5, 2016 ' + sheet.getRange(row, 7).getValue() + '-' + sheet.getRange(row, 8).getValue();
  MailApp.sendEmail(recipient + ',g@g.com', subject, body);
}

function getTime(n) {
  var startHour = 9;
  var afterBreakStartHour = 13;
  var numBeforeBreak = 6;
  var duration = 15;
  
  if (n >= numBeforeBreak) {
    startHour = afterBreakStartHour;
    n -= numBeforeBreak;
  }
  n *= duration;
  var hour = startHour + Math.floor(n/60);
  var min = n % 60;
  if (min < 10) {
    min = '0' + min
  }
  return hour + ':' + min; 
}

function test() {
  for (i = 0; i < 10; i++) {
    Logger.log(getTime(i));
  }
}
