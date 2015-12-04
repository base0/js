// based on http://www.labnol.org/internet/schedule-google-forms/20707/

LIMIT = 20;

function onFormSubmit(e) {
  // notify the form owner
  var recipient = 'เจ้าของฟอร์ม@gmail.com';  
  var title = 'สมัคร QGIS';
  
  MailApp.sendEmail(recipient, title, 
                    'ผู้สมัคร ' + FormApp.getActiveForm().getResponses().length + ' คน\n' + 
                    'ชื่อ: ' + e.response.getItemResponses()[0].getResponse());

  // set remaining seat
  var available = LIMIT - FormApp.getActiveForm().getResponses().length;
  FormApp.getActiveForm().setDescription(available + ' seats remaining.  Jan 6, 2016  Room 802');
  
  // check limit
  if (FormApp.getActiveForm().getResponses().length >= LIMIT) {
    closeForm();
  }  
}

function closeForm() {  
  // stop accepting response
  var form = FormApp.getActiveForm();
  form.setAcceptingResponses(false);
  
  // delete triggers
  var triggers = ScriptApp.getProjectTriggers();  
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  
  // notify form owner
  var subject = 'Your Google Form is no longer accepting responses';
  var formURL = FormApp.getActiveForm().getPublishedUrl();
  MailApp.sendEmail(Session.getActiveUser().getEmail(), subject, formURL); 
}
 

