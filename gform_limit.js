// base on http://www.labnol.org/internet/schedule-google-forms/20707/
LIMIT = 18;

function checkLimit(e) {
  var recipient = 'me@gmail.com';  
  MailApp.sendEmail(recipient, 'สมัคร QGIS', 
                    FormApp.getActiveForm().getResponses().length + 'คน\n' + 
                    e.response.getItemResponses()[0].getResponse());

  if (FormApp.getActiveForm().getResponses().length >= LIMIT) {
    closeForm();
  }  
}

function closeForm() {  
  var form = FormApp.getActiveForm();
  form.setAcceptingResponses(false);
  deleteTriggers_();
  informUser_("Your Google Form is no longer accepting responses");
}
 
function deleteTriggers_() {  
  var triggers = ScriptApp.getProjectTriggers();  
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}
 
/* Send a mail to the form owner when the form status changes */
function informUser_(subject) {
  var formURL = FormApp.getActiveForm().getPublishedUrl();
  MailApp.sendEmail(Session.getActiveUser().getEmail(), subject, formURL);  
}
