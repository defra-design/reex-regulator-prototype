// Add default data
function defaultData(req) {
  req.session.data['current-application'] = "000197",
  req.session.data['applications'] = [
    {
      "id": "000197",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "GreenLoop Recovery",
      "orgId": "ORG-123-001",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000268",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "EcoCycle Industries",
      "orgId": "ORG-123-002",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000293",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Fiber-based composite materials",
      "orgName": "RenewEarth Solutions",
      "orgId": "ORG-123-003",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000579",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Glass",
      "orgName": "BlueBin Environmental",
      "orgId": "ORG-123-004",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000614",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Steel",
      "orgName": "EverCycle Resource Management",
      "orgId": "ORG-123-005",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000668",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "UrbanRenew Processing",
      "orgId": "ORG-123-006",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000778",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "TerraReclaim Systems",
      "orgId": "ORG-123-007",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000813",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Wood",
      "orgName": "SecondLife Materials Co.",
      "orgId": "ORG-123-008",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000833",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Paper and board",
      "orgName": "PureStream Recycling Group",
      "orgId": "ORG-123-009",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 5,000 tonnes",
      "regulator": "England",
      "charge": "2184",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    },
    {
      "id": "000901",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Aluminium",
      "orgName": "ReNova Waste & Recovery",
      "orgId": "ORG-123-010",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654"
    }
  ]
}









// Export the functions so they can be used in the main routes file
module.exports = { defaultData };