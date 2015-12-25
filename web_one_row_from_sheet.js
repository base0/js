function doGet(request) {
  var hs = HtmlService.createTemplateFromFile('a');
  hs.data = getRow(request.parameter.row);
  return hs.evaluate();
}

function getRow(r) {
  var numColumns = 2;
  return SpreadsheetApp
         .openById('1Qa2PttKUMh5m_E0K5t1pzj0xbTvN4tGxLPRcaZWW04M')
         .getSheets()[0]
         .getRange(r, 1, 1, numColumns)
         .getValues()[0];
}


//--------------------------------------------------
<b>Name : </b><?= data[0] ?><br /> 
<b>Salary : </b><?= data[1] ?>
