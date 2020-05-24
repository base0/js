function myFunction() {
  const start_time = '8:30';
  const stop_time  = '16:30';
  
  const start_a = start_time.split(':').map(s=>parseInt(s));
  const stop_a  = stop_time.split(':').map(s=>parseInt(s));
  const start   = start_a[0] * 60 + start_a[1];
  const stop    = stop_a[0]  * 60 + stop_a[1];
  
  Logger.log(start);
  Logger.log(stop);
  var d = new Date();
  var t = d.getHours() * 60 + d.getMinutes();
  
  FormApp.getActiveForm().setAcceptingResponses(t >= start && t <= stop);
}
