# Google Sheets Order Backend Setup

## 1. Create a Google Sheet

Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.

Name it "Aether Orders" (or whatever you prefer).

Add these headers in Row 1 (cells A1 through M1):

```
Date | Name | Phone | Email | City | Address | Wood | Grill | AQI Sensor | HEPA Qty | MERV Qty | Note | Total
```

## 2. Add the Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Paste this script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.city || '',
    data.address || '',
    data.woodPattern || '',
    data.grillDesign || '',
    data.aqiSensor ? 'Yes' : 'No',
    data.hepaFilters || 0,
    data.mervFilters || 0,
    data.note || '',
    data.total || 0
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S)

## 3. Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set:
   - Description: "Aether Orders"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/XXXXX/exec`)

## 4. Add the URL to Your Site

Open `app/order/page.tsx` and find this line near the top:

```typescript
const GOOGLE_SHEETS_URL = "";
```

Paste your URL:

```typescript
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

That's it. Orders will now appear as rows in your Google Sheet.

## Fallback

Until you set up Google Sheets, the order form will open WhatsApp with the
full order details pre-filled, so you can receive orders immediately.

## Optional: Email Notifications

To get emailed on every new order, add this to the Apps Script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.city || '',
    data.address || '',
    data.woodPattern || '',
    data.grillDesign || '',
    data.aqiSensor ? 'Yes' : 'No',
    data.hepaFilters || 0,
    data.mervFilters || 0,
    data.note || '',
    data.total || 0
  ]);

  // Send email notification
  MailApp.sendEmail({
    to: 'YOUR_EMAIL@gmail.com',
    subject: 'New Aether Bloc Order - Rs. ' + (data.total || 0),
    body: 'Name: ' + data.name + '\n' +
          'Phone: ' + data.phone + '\n' +
          'City: ' + data.city + '\n' +
          'Address: ' + data.address + '\n' +
          'Wood: ' + data.woodPattern + '\n' +
          'Grill: ' + data.grillDesign + '\n' +
          'AQI Sensor: ' + (data.aqiSensor ? 'Yes' : 'No') + '\n' +
          'HEPA Filters: ' + data.hepaFilters + '\n' +
          'MERV Filters: ' + data.mervFilters + '\n' +
          'Note: ' + (data.note || 'None') + '\n' +
          'Total: Rs. ' + data.total
  });

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Replace `YOUR_EMAIL@gmail.com` with your email address.
