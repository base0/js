function sheetOnFormSubmit(e) {
  var sheet = e.source.getSheets()[0];
  var row = e.range.getLastRow();

  // set time slot
  var start = getTime(row-2);
  var end = getTime(row-1);
  sheet.getRange(row, 7).setValue(start);
  sheet.getRange(row, 8).setValue(end);
  
  // send email
  var recipient = sheet.getRange(row, 6).getValue();
  var subject = 'schedule for presenting your Android project';
  var name = sheet.getRange(row, 3).getValue();
  var projectName = sheet.getRange(row, 4).getValue() ;
  var body = 'Hello ' + name + '\n\n'
           + 'You will present your project, ' + projectName
           + ' on Jan 4, 2016 ' + start + '-' + end + '\n\n'
           + 'You have to be inside the room at least 10 minutes before presentation';
  MailApp.sendEmail(recipient + ',g@g.com', subject, body);
}

function test() {
  for (i = 0; i < 20; i++) {
    Logger.log(getTime(i));
  }
}

function getTime(n) {
  var start = 9;
  if (n >= 15) {
    start = 12;
    n -= 15;
  }
  n *= 8;
  var hour = start + Math.floor(n/60);
  var min = n % 60;
  if (min < 10) {
    min = '0' + min
  }
  return hour + ':' + min; 
}
