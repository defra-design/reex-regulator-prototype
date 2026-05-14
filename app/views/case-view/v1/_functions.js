// Add default data
function defaultData(req) {
  req.session.data['current-request'] = "000197",
  req.session.data['requests'] = [
    {
      "id": "000197",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "GreenLoop Recovery",
      "orgId": "OLDRLE",
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
      "id": "000268",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "EcoCycle Industries",
      "orgId": "OVJJA1",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    },
    {
      "id": "000293",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Fiber-based composite materials",
      "orgName": "RenewEarth Solutions",
      "orgId": "KZ8I5H",
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
      "id": "000579",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Glass",
      "orgName": "BlueBin Environmental",
      "orgId": "7ASKIE",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    },
    {
      "id": "000614",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Steel",
      "orgName": "EverCycle Resource Management",
      "orgId": "QO4J04",
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
      "id": "000668",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "UrbanRenew Processing",
      "orgId": "2ACM12",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    },
    {
      "id": "000778",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Plastic",
      "orgName": "TerraReclaim Systems",
      "orgId": "9FCW7K",
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
      "id": "000813",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Wood",
      "orgName": "SecondLife Materials Co.",
      "orgId": "YB70MS",
      "orgType": "Reprocessor",
      "reprocessorAddress": "2 Wyld Court, Addingrove, AA3 1AB",
      "tonnageBand": "Up to 10,000 tonnes",
      "regulator": "England",
      "charge": "3276",
      "chargePaidOnline": "No",
      "chargeRef": "PR/PK/EXP 000568587647654",
      "uk":"Yes"
    },
    {
      "id": "000833",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Paper and board",
      "orgName": "PureStream Recycling Group",
      "orgId": "SRVKGL",
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
      "id": "000901",
      "status": "Not started",
      "type": "Renew accreditation",
      "material": "Aluminium",
      "orgName": "ReNova Waste & Recovery",
      "orgId": "6FEPSU",
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