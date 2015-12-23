function onFormSubmit(e) {
  var docId = 'xxxx';
  var email = e.response.getItemResponses()[xxxx].getResponse();
  
  var file = DriveApp.getFileById(docId).makeCopy('application' + Math.random());
  var newDoc = DocumentApp.openById(file.getId());
  
  replace(newDoc, e);
  newDoc.saveAndClose();
  
  var pdf = newDoc.getAs('application/pdf').getBytes();
  var attach = {fileName:'application form.pdf', content:pdf, mimeType:'application/pdf'};
  MailApp.sendEmail(email, 'แบบฟอร์มรับสมัคร', 'กรุณาพิมพ์ไฟล์แนบและติดรูปถ่ายเพื่อยื่นในวันสมัคร', {attachments:[attach]});
  
  DriveApp.removeFile(file);
}

function replace(newDoc, e) {
  var body = newDoc.getBody();

  body.replaceText('<name>', e.response.getItemResponses()[xxxx].getResponse());
  body.replaceText('<email>', e.response.getItemResponses()[xxx].getResponse());
}
