function sheetOnFormSubmit(e) {
  var emailCol = 6;
  var timeCol = 7;
  var myEmail = ',g@g.com';   // use '' if don't want a copy of email
  
  var sheet = e.source.getSheets()[0];
  var row = e.range.getLastRow();

  // set time slot
  sheet.getRange(row, timeCol).setValue("'" + getDuration(row-2));

  // send email
  var recipient = sheet.getRange(row, emailCol).getValue();
  var subject = 'schedule for presenting your Android project';
  var body = 'Hello\n\n'
           + 'You will present your project '
           + 'on January 5, 2016 ' + sheet.getRange(row, timeCol).getValue();
  MailApp.sendEmail(recipient + myEmail, subject, body);
}

function getDuration(n) {
  var startHour = 9;
  var duration = 15;
  var numBeforeBreak = 6;
  var afterBreakStartHour = 13;
  
  if (n >= numBeforeBreak) {
    startHour = afterBreakStartHour;
    n -= numBeforeBreak;
  }
  start = getTime(n, duration);
  end = getTime(n + 1, duration);
  
  return (startHour + start.h) + ':' + (start.m < 10 ? '0' + start.m : start.m) + '-' + 
         (startHour + end.h)   + ':' + (end.m   < 10 ? '0' + end.m   : end.m);
}

function getTime(n, duration) {
  n *= duration;
  var hour = Math.floor(n/60);
  var min = n % 60;
  return {'h':hour, 'm':min};
}

function test() {
  for (i = 0; i < 20; i++) {
    Logger.log(getDuration(i));
  }
}
