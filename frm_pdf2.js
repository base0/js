function myFunction(e) {
  var docId   = '';
  var subject = '';
  var message = '';
  
  var file = DriveApp.getFileById(docId).makeCopy('application' + Math.random());
  
  var newDoc = DocumentApp.openById(file.getId());
  replace(newDoc, e);
  newDoc.saveAndClose();
  
  var pdf = newDoc.getAs('application/pdf').getBytes();
  var attach = {fileName:'form.pdf', content:pdf, mimeType:'application/pdf'};
  var email = e.response.getRespondentEmail();
  MailApp.sendEmail(email, subject, message, {attachments:[attach]});
  
  file.setTrashed(true);
}

function replace(newDoc, e) {
  var body = newDoc.getBody();

  var resp = getResponses(e);
  for(var key in resp) {
    body.replaceText('<' + key + '>', resp[key]);
  }
}

function getResponses(e) {
  var resp = e.response.getItemResponses();
  var responses = {};
  for (i = 0; i < resp.length; i++) {
    var key = resp[i].getItem().getTitle();
    var val = resp[i].getResponse();
    responses[key] = val;
  }
  return responses;
}
