// const mainScheduleSpreadsheet = SpreadsheetApp.openById('1uGZDjfgBqGx93cpx8UUNM3-sNahbeC6HKWRCYT6ZU0s');
// const classListSheetName = mainScheduleSpreadsheet.getSheetByName('Dashboard').getRange(2, 2).getValue();
// const submitPreferencesSheetName = mainScheduleSpreadsheet.getSheetByName('Dashboard').getRange(3, 2).getValue();
// const maxNumber = mainScheduleSpreadsheet.getSheetByName('Dashboard').getRange(4,2).getValue();

function doGet() {
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}


function authenticateUser(username) {
    const sheet = SpreadsheetApp.openById('1uGZDjfgBqGx93cpx8UUNM3-sNahbeC6HKWRCYT6ZU0s').getSheetByName('General Preferences');
    const teachers = sheet.getRange(3, 2, sheet.getLastRow(), 1).getValues();
  
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i][0]=== username && username != '') {
        return true
      }
    }
    return false
  }