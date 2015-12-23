function onFormSubmit(e) {
  var docId = '1cup0TbrQ7CamZCFRFj5bp7-H1v2kGiZjOf901lZB8eU';
  var email = e.response.getItemResponses()[1].getResponse();
  
  var file = DriveApp.getFileById(docId).makeCopy('applications/application' + Math.random());
  var newDoc = DocumentApp.openById(file.getId());
  
  replace(newDoc, e);
  newDoc.saveAndClose();
  
  var pdf = newDoc.getAs('application/pdf').getBytes();
  var attach = {fileName:'application form.pdf', content:pdf, mimeType:'application/pdf'};
  MailApp.sendEmail(email, 'แบบฟอร์มรับสมัคร', 'กรุณาพิมพ์ไฟล์แนบและติดรูปถ่ายเพื่อยื่นในวันสมัคร', {attachments:[attach]});
}

function replace(newDoc, e) {
  var body = newDoc.getBody();

  body.replaceText('<name>', e.response.getItemResponses()[0].getResponse());
  body.replaceText('<email>', e.response.getItemResponses()[1].getResponse());
}
