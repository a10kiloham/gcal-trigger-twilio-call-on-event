function makePhoneCall() {

  var message = "You need to leave for the meeting";
  
  var ACCOUNT_SID = 'ENTER SID'; 
  var ACCOUNT_TOKEN = 'TOKEN'; 

  var TWILIO_NUMBER = '+YOUR NUMBER'; 
  
  var PHONE_NUMBER = '+NUMBER TO DIAL';

  var urlGet = ScriptApp.getService().getUrl();
  
  var payload = {
    "From" : TWILIO_NUMBER
    ,"To" : PHONE_NUMBER
    ,"Url": urlGet
    ,"Method" : "GET"
  };
  
  var headers = {
    "Authorization" : "Basic " + Utilities.base64Encode(ACCOUNT_SID + ':' + ACCOUNT_TOKEN)
  };
  
  var options =
      {
        "method" : "post",
        "payload" : payload,
        "headers" : headers,
        "muteHttpExceptions": true
      };

  var url = 'https://api.twilio.com/2010-04-01/Accounts/'+ACCOUNT_SID+'/Calls.json';
  var response = UrlFetchApp.fetch(url, options);
}

function doGet() {
  var content = HtmlService.createHtmlOutputFromFile("twiml.html").getContent();
  var output = ContentService.createTextOutput(content).setMimeType(ContentService.MimeType.XML);
  return output;
}
