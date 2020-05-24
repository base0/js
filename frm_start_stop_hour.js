function myFunction() {
  const start = 8;
  const stop = 17;
  var d = new Date();
  var h = d.getHours();
  
  FormApp.getActiveForm().setAcceptingResponses(h >= start && h < stop);
}
