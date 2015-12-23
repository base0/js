function myFunction(e) {
  var emailCol = 3
  var file = DriveApp.getFileById(DocumentApp.getActiveDocument().getId()).makeCopy('applications/application' + Math.random());
  var newDoc = DocumentApp.openById(file.getId());
  
  replace(newDoc);

  var pdf = newDoc.getAs('application/pdf').getBytes();
  var attach = {fileName:'application form.pdf', content:pdf, mimeType:'application/pdf'};
  MailApp.sendEmail('wannik.academy@gmail.com', 'asdf', 'bbb', {attachments:[attach]});
}

function replace(newDoc) {
  var body = newDoc.getBody();

  body.replaceText('{name}', 'วรเศรษฐ');
  body.replaceText('{email}', 'a');
}
