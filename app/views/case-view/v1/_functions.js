// Add default data
function defaultData(req) {
  req.session.data['requests'] = [
    {
      "id": "00000489",
      "status": "Not started",
      "sla": "12",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "Acme Ltd",
      "orgId": "100300",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    },
    {
      "id": "00001003",
      "status": "Not started",
      "sla": "14",
      "type": "Renew accreditation",
      "material": "Steel",
      "orgName": "Wayne Enterprises",
      "orgId": "095521",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    }
  ]
}









// Export the functions so they can be used in the main routes file
module.exports = { defaultData };