var SHEET_NAME = "Sheet1";  // Change this if your sheet has a different name

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000); // Wait 30 seconds for others' use of the script to finish
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error("Sheet not found");
    }

    // Parse the incoming data
    var data;
    if (e.postData.type == "application/x-www-form-urlencoded") {
      data = e.parameter;
    } else if (e.postData.type == "application/json") {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error("Invalid data format");
    }

    // Create JST timestamp
    var now = new Date();
    var jstTime = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // Add 9 hours for JST

    // Create row data
    var rowData = [
      jstTime,             // JST Timestamp
      data.q1 || '',       // Question 1
      data.q2 || '',       // Question 2
      data.q3 || '',       // Question 3
      data.q4 || '',       // Question 4
      data.feedback || ''   // Feedback
    ];

    // Append the data
    sheet.appendRow(rowData);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "row": rowData
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .addHeader('Access-Control-Allow-Origin', '*');

  } catch(error) {
    // Log the error
    console.error('Error in doPost: ' + error.message);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": error.message
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .addHeader('Access-Control-Allow-Origin', '*');
    
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    "status": "online",
    "message": "The FAQ Bot logging service is running"
  }))
  .setMimeType(ContentService.MimeType.JSON)
  .addHeader('Access-Control-Allow-Origin', '*');
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .addHeader('Access-Control-Allow-Origin', '*')
    .addHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .addHeader('Access-Control-Allow-Headers', 'Content-Type')
    .addHeader('Access-Control-Max-Age', '86400');
} 