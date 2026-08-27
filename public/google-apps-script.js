const SHEET_NAME = 'Reviews'
const SPREADSHEET_ID = '1ElUhyOC2C7SkAIwy1M-gB8ezgmrJQsthQyHVFto3skk'

function getSheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function doGet() {
  const sheet = getSheet()
  const rows = sheet.getDataRange().getValues()
  const reviews = rows.slice(1).filter(row => row[1] && row[4]).map(row => ({
    id: String(row[0]),
    name: String(row[1]),
    role: String(row[2] || ''),
    rating: Math.min(5, Math.max(1, Number(row[3]) || 5)),
    text: String(row[4]),
    createdAt: String(row[5] || ''),
  })).reverse()

  return jsonResponse({ reviews })
}

function doPost(event) {
  const review = JSON.parse(event.postData.contents)
  const name = String(review.name || '').trim()
  const role = String(review.role || '').trim()
  const text = String(review.text || '').trim()
  const rating = Math.min(5, Math.max(1, Number(review.rating) || 5))

  if (!name || !text) {
    return jsonResponse({ error: 'Name and review are required' })
  }

  getSheet().appendRow([
    Utilities.getUuid(),
    name,
    role,
    rating,
    text,
    new Date().toISOString(),
  ])

  return jsonResponse({ ok: true })
}